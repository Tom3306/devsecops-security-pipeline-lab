# Application Security Tool Map

This map links common recruiter keywords to practical evidence in this repository.

## OWASP Top 10

- Injection: schema validation, Semgrep custom rules, CodeQL scanning.
- Security Misconfiguration: Helmet headers, body-size limits, ZAP baseline, Trivy config scanning.
- Vulnerable and Outdated Components: Dependabot, Dependency Review, Trivy filesystem scan.
- Identification and Authentication Failures: documented as future extension for OAuth/OIDC and session controls.
- Software and Data Integrity Failures: OSSF Scorecard, pinned GitHub Actions, dependency review.
- Security Logging and Monitoring Failures: request IDs and structured logging with Pino.

## Recruiter Keywords Covered

- Application Security
- DevSecOps
- GitHub Actions
- CodeQL
- Semgrep
- Gitleaks
- Trivy
- OWASP ZAP
- OSSF Scorecard
- Docker
- Dependency Review
- Secure SDLC
- CI/CD security

## Next Extensions

1. Add an intentionally vulnerable branch that demonstrates the pipeline catching real findings.
2. Add a cloud deployment variant using Terraform and Checkov/Trivy IaC.
3. Add a Kubernetes variant using Kyverno, Falco, and kube-bench.
4. Export SARIF artifacts and publish a short findings summary after every run.
5. Add threat model documentation using OWASP Threat Dragon.

