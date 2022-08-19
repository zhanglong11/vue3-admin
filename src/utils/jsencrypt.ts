import { JSEncrypt } from 'jsencrypt'

const PUBLIC_KEY =
  'MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQChqImB8Pz4nTh3UBbA5m9zb+YCIwvop1Zxr8Bii6xoEt6+znWy/2WVXMV/NH28Yq34cH68VdcKSikEQlGnAqhci+9rrjVo0/vS2/D6RJcihXqfST9ZOMFsRJgxAQWyIbjL/Gf7HD5NrCM54TE+YOk/P6eI5Nc8lbkxXEavrLDtOwIDAQAB'

const PRIVATE_KEY =
  'MIICdQIBADANBgkqhkiG9w0BAQEFAASCAl8wggJbAgEAAoGBAKGoiYHw/PidOHdQFsDmb3Nv5gIjC+inVnGvwGKLrGgS3r7OdbL/ZZVcxX80fbxirfhwfrxV1wpKKQRCUacCqFyL72uuNWjT+9Lb8PpElyKFep9JP1k4wWxEmDEBBbIhuMv8Z/scPk2sIznhMT5g6T8/p4jk1zyVuTFcRq+ssO07AgMBAAECgYB3DnLHGj6UsuWFKZy4UH3AXKbe6AS7QZJug+uCKC+/LjaR++e+/k1IJVzmhDgd5+cMU31jIy0OTPPMSTNtdo2a/zBepSMKHbYSho16S8w87Xy0UMkUgvHULsglqsqLCc2BLhAVAr3f9MP77OktlwzCjFdHgU+I7ZcFE93GicshEQJBANM46kuh0OJLJGb+I8rWyrrQqmDdRRUaTK8ufDFRjWgw1ONp7iM6FlJxoYVeCcWkiOBrBuExQUgosxH+SVSDWbcCQQDD7cX6bhaI2foI4B75RA6hbCKOYOI6o2eWMjbOUtPhVvDk8YRe484w6CBpHxd0cROhc6CSiqeMPG7UbLrJFFidAkApCoAL3g82SR9zm6Hcwct2bSEN3TCVHx0TVNbwxkXRntterLCGy7yWnFmkDlebvZKS+HjHvMhQewgAUQZyk2sVAkBW3AyO70syNGBymtlgbFmIGqZfNHhWwqZjobNGWNXx6lc1SBUE9D0u1Vm5AL2nM5IeW2JuVOXed9QyfFl6V3jJAkAbrKavjBk0thWA+Rri0kF+CV1PZqbtNzbwX+XFUXotlmzTCtf1jJDwnm/o8x7m4ljY9KNJNDEuDwVIQLQtQ8aP'

export const userEncryption = obj => {
  // 使用公钥加密
  const encrypt = new JSEncrypt()
  encrypt.setPublicKey(PUBLIC_KEY)
  const loginName = encrypt.encrypt(obj.loginName)
  const password = encrypt.encrypt(obj.password)
  return {
    ...obj,
    loginName,
    password
  }
}
