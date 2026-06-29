# DevSecOps Security Pipeline Lab

This portfolio lab demonstrates a practical application security pipeline for a small Node.js service.
It is designed to show recruiter-visible security engineering skills rather than list tools without proof.

## What It Demonstrates

- Secure-by-default Express service configuration with Helmet, request IDs, JSON body limits, rate limiting, and schema validation.
- Unit tests that verify basic functionality and defensive headers.
- GitHub Actions pipeline covering SAST, dependency review, secret scanning, filesystem scanning, container scanning, DAST, and supply-chain posture.
- OWASP-focused documentation explaining what each control catches and where it fits in an AppSec workflow.

## Tooling Covered

| Area | Tools |
| --- | --- |
| SAST | CodeQL, Semgrep |
| Secrets | Gitleaks |
| Dependencies | Dependabot, GitHub Dependency Review, Trivy filesystem scan |
| Containers | Docker, Trivy image scan |
| DAST | OWASP ZAP baseline scan |
| Supply chain | OSSF Scorecard |
| AppSec patterns | OWASP Top 10 mapping, input validation, security headers, rate limiting |

## Run Locally

```bash
npm install
npm test
npm start
```

The service listens on `http://127.0.0.1:3000` by default.

```bash
curl http://127.0.0.1:3000/healthz
curl 'http://127.0.0.1:3000/api/search?q=appsec'
```

## Why This Matters

Recruiters and hiring managers usually want evidence that a security engineer can:

- understand application risk;
- automate checks in CI/CD;
- reduce noisy findings into clear remediation work;
- work with developers instead of only writing reports;
- explain how cloud, code, container, dependency, and runtime controls connect.

This repository turns those skills into something visible.

## Portfolio Narrative

> Built a DevSecOps security pipeline lab using GitHub Actions, CodeQL, Semgrep, Gitleaks, Trivy, OWASP ZAP, Dependabot, and OSSF Scorecard to demonstrate application security controls across source code, dependencies, containers, DAST, and supply-chain posture.

## Documentation

- [Security Pipeline](docs/security-pipeline.md)
- [Application Security Tool Map](docs/appsec-tool-map.md)
- [AppSec Open-Source Targets](docs/appsec-open-source-targets.md)
- [Recruiter Brief](docs/recruiter-brief.md)

