# Security Pipeline

The pipeline is intentionally layered. Each tool answers a different security question.

## 1. Unit Tests

Validates that the service still behaves as expected before running deeper security checks.
Security controls should not break normal developer workflows.

## 2. CodeQL

CodeQL provides semantic static analysis for JavaScript and TypeScript.
It is useful for finding injection, unsafe data flow, and framework-specific mistakes.

## 3. Semgrep

Semgrep runs OWASP Top 10 rules and a small custom AppSec ruleset.
The custom rules demonstrate how a team can encode local security expectations, such as avoiding eval-like execution or requiring JSON body-size limits.

## 4. Gitleaks

Gitleaks scans the repository history for accidentally committed secrets.
This catches a common real-world failure mode before secrets reach production.

## 5. Dependency Review And Dependabot

Dependency Review blocks risky dependency changes on pull requests.
Dependabot keeps direct dependencies and GitHub Actions versions visible and current.

## 6. Trivy Filesystem Scan

Trivy scans the repository for vulnerable packages and configuration risks.
It provides a practical bridge between AppSec and vulnerability management.

## 7. Container Build And Scan

The Dockerfile builds a minimal production image and runs the application as a non-root user.
Trivy then scans the image for high and critical vulnerabilities.

## 8. OWASP ZAP Baseline

ZAP starts from the running web service and performs a baseline DAST scan.
This validates runtime-facing controls such as headers, common misconfigurations, and exposed endpoints.

## 9. OSSF Scorecard

Scorecard checks supply-chain posture, including branch protection signals, dependency update practices, token permissions, and maintained security hygiene.

## Recruiter Signal

This pipeline shows that the owner can build and explain the security automation employers expect in AppSec, product security, cloud security, and DevSecOps roles.

