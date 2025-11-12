// https://registry.terraform.io/providers/aembit/aembit/1.25.1/docs/data-sources/roles
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAembitRolesConfig extends cdktf.TerraformMetaArguments {
}
export interface DataAembitRolesRolesAccessAuthorizationEvents {
}

export function dataAembitRolesRolesAccessAuthorizationEventsToTerraform(struct?: DataAembitRolesRolesAccessAuthorizationEvents): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAembitRolesRolesAccessAuthorizationEventsToHclTerraform(struct?: DataAembitRolesRolesAccessAuthorizationEvents): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAembitRolesRolesAccessAuthorizationEventsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAembitRolesRolesAccessAuthorizationEvents | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAembitRolesRolesAccessAuthorizationEvents | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // read - computed: true, optional: false, required: false
  public get read() {
    return this.getBooleanAttribute('read');
  }
}
export interface DataAembitRolesRolesAccessConditions {
}

export function dataAembitRolesRolesAccessConditionsToTerraform(struct?: DataAembitRolesRolesAccessConditions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAembitRolesRolesAccessConditionsToHclTerraform(struct?: DataAembitRolesRolesAccessConditions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAembitRolesRolesAccessConditionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAembitRolesRolesAccessConditions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAembitRolesRolesAccessConditions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // read - computed: true, optional: false, required: false
  public get read() {
    return this.getBooleanAttribute('read');
  }

  // write - computed: true, optional: false, required: false
  public get write() {
    return this.getBooleanAttribute('write');
  }
}
export interface DataAembitRolesRolesAccessPolicies {
}

export function dataAembitRolesRolesAccessPoliciesToTerraform(struct?: DataAembitRolesRolesAccessPolicies): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAembitRolesRolesAccessPoliciesToHclTerraform(struct?: DataAembitRolesRolesAccessPolicies): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAembitRolesRolesAccessPoliciesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAembitRolesRolesAccessPolicies | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAembitRolesRolesAccessPolicies | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // read - computed: true, optional: false, required: false
  public get read() {
    return this.getBooleanAttribute('read');
  }

  // write - computed: true, optional: false, required: false
  public get write() {
    return this.getBooleanAttribute('write');
  }
}
export interface DataAembitRolesRolesAgentControllers {
}

export function dataAembitRolesRolesAgentControllersToTerraform(struct?: DataAembitRolesRolesAgentControllers): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAembitRolesRolesAgentControllersToHclTerraform(struct?: DataAembitRolesRolesAgentControllers): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAembitRolesRolesAgentControllersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAembitRolesRolesAgentControllers | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAembitRolesRolesAgentControllers | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // read - computed: true, optional: false, required: false
  public get read() {
    return this.getBooleanAttribute('read');
  }

  // write - computed: true, optional: false, required: false
  public get write() {
    return this.getBooleanAttribute('write');
  }
}
export interface DataAembitRolesRolesAuditLogs {
}

export function dataAembitRolesRolesAuditLogsToTerraform(struct?: DataAembitRolesRolesAuditLogs): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAembitRolesRolesAuditLogsToHclTerraform(struct?: DataAembitRolesRolesAuditLogs): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAembitRolesRolesAuditLogsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAembitRolesRolesAuditLogs | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAembitRolesRolesAuditLogs | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // read - computed: true, optional: false, required: false
  public get read() {
    return this.getBooleanAttribute('read');
  }
}
export interface DataAembitRolesRolesClientWorkloads {
}

export function dataAembitRolesRolesClientWorkloadsToTerraform(struct?: DataAembitRolesRolesClientWorkloads): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAembitRolesRolesClientWorkloadsToHclTerraform(struct?: DataAembitRolesRolesClientWorkloads): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAembitRolesRolesClientWorkloadsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAembitRolesRolesClientWorkloads | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAembitRolesRolesClientWorkloads | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // read - computed: true, optional: false, required: false
  public get read() {
    return this.getBooleanAttribute('read');
  }

  // write - computed: true, optional: false, required: false
  public get write() {
    return this.getBooleanAttribute('write');
  }
}
export interface DataAembitRolesRolesCredentialProviderIntegrations {
}

export function dataAembitRolesRolesCredentialProviderIntegrationsToTerraform(struct?: DataAembitRolesRolesCredentialProviderIntegrations): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAembitRolesRolesCredentialProviderIntegrationsToHclTerraform(struct?: DataAembitRolesRolesCredentialProviderIntegrations): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAembitRolesRolesCredentialProviderIntegrationsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAembitRolesRolesCredentialProviderIntegrations | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAembitRolesRolesCredentialProviderIntegrations | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // read - computed: true, optional: false, required: false
  public get read() {
    return this.getBooleanAttribute('read');
  }

  // write - computed: true, optional: false, required: false
  public get write() {
    return this.getBooleanAttribute('write');
  }
}
export interface DataAembitRolesRolesCredentialProviders {
}

export function dataAembitRolesRolesCredentialProvidersToTerraform(struct?: DataAembitRolesRolesCredentialProviders): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAembitRolesRolesCredentialProvidersToHclTerraform(struct?: DataAembitRolesRolesCredentialProviders): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAembitRolesRolesCredentialProvidersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAembitRolesRolesCredentialProviders | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAembitRolesRolesCredentialProviders | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // read - computed: true, optional: false, required: false
  public get read() {
    return this.getBooleanAttribute('read');
  }

  // write - computed: true, optional: false, required: false
  public get write() {
    return this.getBooleanAttribute('write');
  }
}
export interface DataAembitRolesRolesDiscoveryIntegrations {
}

export function dataAembitRolesRolesDiscoveryIntegrationsToTerraform(struct?: DataAembitRolesRolesDiscoveryIntegrations): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAembitRolesRolesDiscoveryIntegrationsToHclTerraform(struct?: DataAembitRolesRolesDiscoveryIntegrations): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAembitRolesRolesDiscoveryIntegrationsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAembitRolesRolesDiscoveryIntegrations | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAembitRolesRolesDiscoveryIntegrations | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // read - computed: true, optional: false, required: false
  public get read() {
    return this.getBooleanAttribute('read');
  }

  // write - computed: true, optional: false, required: false
  public get write() {
    return this.getBooleanAttribute('write');
  }
}
export interface DataAembitRolesRolesGlobalPolicyCompliance {
}

export function dataAembitRolesRolesGlobalPolicyComplianceToTerraform(struct?: DataAembitRolesRolesGlobalPolicyCompliance): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAembitRolesRolesGlobalPolicyComplianceToHclTerraform(struct?: DataAembitRolesRolesGlobalPolicyCompliance): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAembitRolesRolesGlobalPolicyComplianceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAembitRolesRolesGlobalPolicyCompliance | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAembitRolesRolesGlobalPolicyCompliance | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // read - computed: true, optional: false, required: false
  public get read() {
    return this.getBooleanAttribute('read');
  }

  // write - computed: true, optional: false, required: false
  public get write() {
    return this.getBooleanAttribute('write');
  }
}
export interface DataAembitRolesRolesGlobalPolicyComplianceReport {
}

export function dataAembitRolesRolesGlobalPolicyComplianceReportToTerraform(struct?: DataAembitRolesRolesGlobalPolicyComplianceReport): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAembitRolesRolesGlobalPolicyComplianceReportToHclTerraform(struct?: DataAembitRolesRolesGlobalPolicyComplianceReport): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAembitRolesRolesGlobalPolicyComplianceReportOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAembitRolesRolesGlobalPolicyComplianceReport | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAembitRolesRolesGlobalPolicyComplianceReport | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // read - computed: true, optional: false, required: false
  public get read() {
    return this.getBooleanAttribute('read');
  }
}
export interface DataAembitRolesRolesIdentityProviders {
}

export function dataAembitRolesRolesIdentityProvidersToTerraform(struct?: DataAembitRolesRolesIdentityProviders): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAembitRolesRolesIdentityProvidersToHclTerraform(struct?: DataAembitRolesRolesIdentityProviders): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAembitRolesRolesIdentityProvidersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAembitRolesRolesIdentityProviders | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAembitRolesRolesIdentityProviders | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // read - computed: true, optional: false, required: false
  public get read() {
    return this.getBooleanAttribute('read');
  }

  // write - computed: true, optional: false, required: false
  public get write() {
    return this.getBooleanAttribute('write');
  }
}
export interface DataAembitRolesRolesIntegrations {
}

export function dataAembitRolesRolesIntegrationsToTerraform(struct?: DataAembitRolesRolesIntegrations): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAembitRolesRolesIntegrationsToHclTerraform(struct?: DataAembitRolesRolesIntegrations): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAembitRolesRolesIntegrationsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAembitRolesRolesIntegrations | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAembitRolesRolesIntegrations | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // read - computed: true, optional: false, required: false
  public get read() {
    return this.getBooleanAttribute('read');
  }

  // write - computed: true, optional: false, required: false
  public get write() {
    return this.getBooleanAttribute('write');
  }
}
export interface DataAembitRolesRolesLogStreams {
}

export function dataAembitRolesRolesLogStreamsToTerraform(struct?: DataAembitRolesRolesLogStreams): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAembitRolesRolesLogStreamsToHclTerraform(struct?: DataAembitRolesRolesLogStreams): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAembitRolesRolesLogStreamsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAembitRolesRolesLogStreams | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAembitRolesRolesLogStreams | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // read - computed: true, optional: false, required: false
  public get read() {
    return this.getBooleanAttribute('read');
  }

  // write - computed: true, optional: false, required: false
  public get write() {
    return this.getBooleanAttribute('write');
  }
}
export interface DataAembitRolesRolesResourceSets {
}

export function dataAembitRolesRolesResourceSetsToTerraform(struct?: DataAembitRolesRolesResourceSets): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAembitRolesRolesResourceSetsToHclTerraform(struct?: DataAembitRolesRolesResourceSets): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAembitRolesRolesResourceSetsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAembitRolesRolesResourceSets | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAembitRolesRolesResourceSets | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // read - computed: true, optional: false, required: false
  public get read() {
    return this.getBooleanAttribute('read');
  }

  // write - computed: true, optional: false, required: false
  public get write() {
    return this.getBooleanAttribute('write');
  }
}
export interface DataAembitRolesRolesRoles {
}

export function dataAembitRolesRolesRolesToTerraform(struct?: DataAembitRolesRolesRoles): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAembitRolesRolesRolesToHclTerraform(struct?: DataAembitRolesRolesRoles): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAembitRolesRolesRolesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAembitRolesRolesRoles | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAembitRolesRolesRoles | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // read - computed: true, optional: false, required: false
  public get read() {
    return this.getBooleanAttribute('read');
  }

  // write - computed: true, optional: false, required: false
  public get write() {
    return this.getBooleanAttribute('write');
  }
}
export interface DataAembitRolesRolesRouting {
}

export function dataAembitRolesRolesRoutingToTerraform(struct?: DataAembitRolesRolesRouting): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAembitRolesRolesRoutingToHclTerraform(struct?: DataAembitRolesRolesRouting): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAembitRolesRolesRoutingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAembitRolesRolesRouting | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAembitRolesRolesRouting | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // read - computed: true, optional: false, required: false
  public get read() {
    return this.getBooleanAttribute('read');
  }

  // write - computed: true, optional: false, required: false
  public get write() {
    return this.getBooleanAttribute('write');
  }
}
export interface DataAembitRolesRolesServerWorkloads {
}

export function dataAembitRolesRolesServerWorkloadsToTerraform(struct?: DataAembitRolesRolesServerWorkloads): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAembitRolesRolesServerWorkloadsToHclTerraform(struct?: DataAembitRolesRolesServerWorkloads): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAembitRolesRolesServerWorkloadsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAembitRolesRolesServerWorkloads | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAembitRolesRolesServerWorkloads | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // read - computed: true, optional: false, required: false
  public get read() {
    return this.getBooleanAttribute('read');
  }

  // write - computed: true, optional: false, required: false
  public get write() {
    return this.getBooleanAttribute('write');
  }
}
export interface DataAembitRolesRolesSignonPolicy {
}

export function dataAembitRolesRolesSignonPolicyToTerraform(struct?: DataAembitRolesRolesSignonPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAembitRolesRolesSignonPolicyToHclTerraform(struct?: DataAembitRolesRolesSignonPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAembitRolesRolesSignonPolicyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAembitRolesRolesSignonPolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAembitRolesRolesSignonPolicy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // read - computed: true, optional: false, required: false
  public get read() {
    return this.getBooleanAttribute('read');
  }

  // write - computed: true, optional: false, required: false
  public get write() {
    return this.getBooleanAttribute('write');
  }
}
export interface DataAembitRolesRolesStandaloneCertificateAuthorities {
}

export function dataAembitRolesRolesStandaloneCertificateAuthoritiesToTerraform(struct?: DataAembitRolesRolesStandaloneCertificateAuthorities): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAembitRolesRolesStandaloneCertificateAuthoritiesToHclTerraform(struct?: DataAembitRolesRolesStandaloneCertificateAuthorities): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAembitRolesRolesStandaloneCertificateAuthoritiesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAembitRolesRolesStandaloneCertificateAuthorities | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAembitRolesRolesStandaloneCertificateAuthorities | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // read - computed: true, optional: false, required: false
  public get read() {
    return this.getBooleanAttribute('read');
  }

  // write - computed: true, optional: false, required: false
  public get write() {
    return this.getBooleanAttribute('write');
  }
}
export interface DataAembitRolesRolesTrustProviders {
}

export function dataAembitRolesRolesTrustProvidersToTerraform(struct?: DataAembitRolesRolesTrustProviders): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAembitRolesRolesTrustProvidersToHclTerraform(struct?: DataAembitRolesRolesTrustProviders): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAembitRolesRolesTrustProvidersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAembitRolesRolesTrustProviders | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAembitRolesRolesTrustProviders | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // read - computed: true, optional: false, required: false
  public get read() {
    return this.getBooleanAttribute('read');
  }

  // write - computed: true, optional: false, required: false
  public get write() {
    return this.getBooleanAttribute('write');
  }
}
export interface DataAembitRolesRolesUsers {
}

export function dataAembitRolesRolesUsersToTerraform(struct?: DataAembitRolesRolesUsers): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAembitRolesRolesUsersToHclTerraform(struct?: DataAembitRolesRolesUsers): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAembitRolesRolesUsersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAembitRolesRolesUsers | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAembitRolesRolesUsers | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // read - computed: true, optional: false, required: false
  public get read() {
    return this.getBooleanAttribute('read');
  }

  // write - computed: true, optional: false, required: false
  public get write() {
    return this.getBooleanAttribute('write');
  }
}
export interface DataAembitRolesRolesWorkloadEvents {
}

export function dataAembitRolesRolesWorkloadEventsToTerraform(struct?: DataAembitRolesRolesWorkloadEvents): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAembitRolesRolesWorkloadEventsToHclTerraform(struct?: DataAembitRolesRolesWorkloadEvents): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAembitRolesRolesWorkloadEventsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAembitRolesRolesWorkloadEvents | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAembitRolesRolesWorkloadEvents | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // read - computed: true, optional: false, required: false
  public get read() {
    return this.getBooleanAttribute('read');
  }
}
export interface DataAembitRolesRoles {
  /**
  * Permissions for Access Authorization Event resources.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aembit/aembit/1.25.1/docs/data-sources/roles#access_authorization_events DataAembitRoles#access_authorization_events}
  */
  readonly accessAuthorizationEvents: DataAembitRolesRolesAccessAuthorizationEvents;
  /**
  * Permissions for Access Condition resources.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aembit/aembit/1.25.1/docs/data-sources/roles#access_conditions DataAembitRoles#access_conditions}
  */
  readonly accessConditions: DataAembitRolesRolesAccessConditions;
  /**
  * Permissions for Access Policy resources.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aembit/aembit/1.25.1/docs/data-sources/roles#access_policies DataAembitRoles#access_policies}
  */
  readonly accessPolicies: DataAembitRolesRolesAccessPolicies;
  /**
  * Permissions for Agent Controller resources.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aembit/aembit/1.25.1/docs/data-sources/roles#agent_controllers DataAembitRoles#agent_controllers}
  */
  readonly agentControllers: DataAembitRolesRolesAgentControllers;
  /**
  * Permissions for Audit Log resources.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aembit/aembit/1.25.1/docs/data-sources/roles#audit_logs DataAembitRoles#audit_logs}
  */
  readonly auditLogs: DataAembitRolesRolesAuditLogs;
  /**
  * Permissions for Client Workload resources.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aembit/aembit/1.25.1/docs/data-sources/roles#client_workloads DataAembitRoles#client_workloads}
  */
  readonly clientWorkloads: DataAembitRolesRolesClientWorkloads;
  /**
  * Permissions for Credential Provider Integration resources.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aembit/aembit/1.25.1/docs/data-sources/roles#credential_provider_integrations DataAembitRoles#credential_provider_integrations}
  */
  readonly credentialProviderIntegrations: DataAembitRolesRolesCredentialProviderIntegrations;
  /**
  * Permissions for Credential Provider resources.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aembit/aembit/1.25.1/docs/data-sources/roles#credential_providers DataAembitRoles#credential_providers}
  */
  readonly credentialProviders: DataAembitRolesRolesCredentialProviders;
  /**
  * Permissions for Discovery Integration resources.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aembit/aembit/1.25.1/docs/data-sources/roles#discovery_integrations DataAembitRoles#discovery_integrations}
  */
  readonly discoveryIntegrations: DataAembitRolesRolesDiscoveryIntegrations;
  /**
  * Permissions for Global Policy Compliance resources.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aembit/aembit/1.25.1/docs/data-sources/roles#global_policy_compliance DataAembitRoles#global_policy_compliance}
  */
  readonly globalPolicyCompliance: DataAembitRolesRolesGlobalPolicyCompliance;
  /**
  * Permissions for Global Policy Compliance Report resources.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aembit/aembit/1.25.1/docs/data-sources/roles#global_policy_compliance_report DataAembitRoles#global_policy_compliance_report}
  */
  readonly globalPolicyComplianceReport: DataAembitRolesRolesGlobalPolicyComplianceReport;
  /**
  * Permissions for Identity Provider resources.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aembit/aembit/1.25.1/docs/data-sources/roles#identity_providers DataAembitRoles#identity_providers}
  */
  readonly identityProviders: DataAembitRolesRolesIdentityProviders;
  /**
  * Permissions for Integration resources.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aembit/aembit/1.25.1/docs/data-sources/roles#integrations DataAembitRoles#integrations}
  */
  readonly integrations: DataAembitRolesRolesIntegrations;
  /**
  * Permissions for Log Stream resources.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aembit/aembit/1.25.1/docs/data-sources/roles#log_streams DataAembitRoles#log_streams}
  */
  readonly logStreams: DataAembitRolesRolesLogStreams;
  /**
  * Permissions for Resource Sets resources.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aembit/aembit/1.25.1/docs/data-sources/roles#resource_sets DataAembitRoles#resource_sets}
  */
  readonly resourceSets: DataAembitRolesRolesResourceSets;
  /**
  * Permissions for Role resources.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aembit/aembit/1.25.1/docs/data-sources/roles#roles DataAembitRoles#roles}
  */
  readonly roles: DataAembitRolesRolesRoles;
  /**
  * Permissions for Routing Configuration resources.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aembit/aembit/1.25.1/docs/data-sources/roles#routing DataAembitRoles#routing}
  */
  readonly routing: DataAembitRolesRolesRouting;
  /**
  * Permissions for Server Workload resources.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aembit/aembit/1.25.1/docs/data-sources/roles#server_workloads DataAembitRoles#server_workloads}
  */
  readonly serverWorkloads: DataAembitRolesRolesServerWorkloads;
  /**
  * Permissions for SignOn Policy resources.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aembit/aembit/1.25.1/docs/data-sources/roles#signon_policy DataAembitRoles#signon_policy}
  */
  readonly signonPolicy: DataAembitRolesRolesSignonPolicy;
  /**
  * Permissions for Standalone Certificate Authorities resources.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aembit/aembit/1.25.1/docs/data-sources/roles#standalone_certificate_authorities DataAembitRoles#standalone_certificate_authorities}
  */
  readonly standaloneCertificateAuthorities: DataAembitRolesRolesStandaloneCertificateAuthorities;
  /**
  * Permissions for Trust Provider resources.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aembit/aembit/1.25.1/docs/data-sources/roles#trust_providers DataAembitRoles#trust_providers}
  */
  readonly trustProviders: DataAembitRolesRolesTrustProviders;
  /**
  * Permissions for User resources.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aembit/aembit/1.25.1/docs/data-sources/roles#users DataAembitRoles#users}
  */
  readonly users: DataAembitRolesRolesUsers;
  /**
  * Permissions for Workload Event resources.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aembit/aembit/1.25.1/docs/data-sources/roles#workload_events DataAembitRoles#workload_events}
  */
  readonly workloadEvents: DataAembitRolesRolesWorkloadEvents;
}

export function dataAembitRolesRolesToTerraform(struct?: DataAembitRolesRoles): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    access_authorization_events: dataAembitRolesRolesAccessAuthorizationEventsToTerraform(struct!.accessAuthorizationEvents),
    access_conditions: dataAembitRolesRolesAccessConditionsToTerraform(struct!.accessConditions),
    access_policies: dataAembitRolesRolesAccessPoliciesToTerraform(struct!.accessPolicies),
    agent_controllers: dataAembitRolesRolesAgentControllersToTerraform(struct!.agentControllers),
    audit_logs: dataAembitRolesRolesAuditLogsToTerraform(struct!.auditLogs),
    client_workloads: dataAembitRolesRolesClientWorkloadsToTerraform(struct!.clientWorkloads),
    credential_provider_integrations: dataAembitRolesRolesCredentialProviderIntegrationsToTerraform(struct!.credentialProviderIntegrations),
    credential_providers: dataAembitRolesRolesCredentialProvidersToTerraform(struct!.credentialProviders),
    discovery_integrations: dataAembitRolesRolesDiscoveryIntegrationsToTerraform(struct!.discoveryIntegrations),
    global_policy_compliance: dataAembitRolesRolesGlobalPolicyComplianceToTerraform(struct!.globalPolicyCompliance),
    global_policy_compliance_report: dataAembitRolesRolesGlobalPolicyComplianceReportToTerraform(struct!.globalPolicyComplianceReport),
    identity_providers: dataAembitRolesRolesIdentityProvidersToTerraform(struct!.identityProviders),
    integrations: dataAembitRolesRolesIntegrationsToTerraform(struct!.integrations),
    log_streams: dataAembitRolesRolesLogStreamsToTerraform(struct!.logStreams),
    resource_sets: dataAembitRolesRolesResourceSetsToTerraform(struct!.resourceSets),
    roles: dataAembitRolesRolesRolesToTerraform(struct!.roles),
    routing: dataAembitRolesRolesRoutingToTerraform(struct!.routing),
    server_workloads: dataAembitRolesRolesServerWorkloadsToTerraform(struct!.serverWorkloads),
    signon_policy: dataAembitRolesRolesSignonPolicyToTerraform(struct!.signonPolicy),
    standalone_certificate_authorities: dataAembitRolesRolesStandaloneCertificateAuthoritiesToTerraform(struct!.standaloneCertificateAuthorities),
    trust_providers: dataAembitRolesRolesTrustProvidersToTerraform(struct!.trustProviders),
    users: dataAembitRolesRolesUsersToTerraform(struct!.users),
    workload_events: dataAembitRolesRolesWorkloadEventsToTerraform(struct!.workloadEvents),
  }
}


export function dataAembitRolesRolesToHclTerraform(struct?: DataAembitRolesRoles): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    access_authorization_events: {
      value: dataAembitRolesRolesAccessAuthorizationEventsToHclTerraform(struct!.accessAuthorizationEvents),
      isBlock: true,
      type: "struct",
      storageClassType: "DataAembitRolesRolesAccessAuthorizationEvents",
    },
    access_conditions: {
      value: dataAembitRolesRolesAccessConditionsToHclTerraform(struct!.accessConditions),
      isBlock: true,
      type: "struct",
      storageClassType: "DataAembitRolesRolesAccessConditions",
    },
    access_policies: {
      value: dataAembitRolesRolesAccessPoliciesToHclTerraform(struct!.accessPolicies),
      isBlock: true,
      type: "struct",
      storageClassType: "DataAembitRolesRolesAccessPolicies",
    },
    agent_controllers: {
      value: dataAembitRolesRolesAgentControllersToHclTerraform(struct!.agentControllers),
      isBlock: true,
      type: "struct",
      storageClassType: "DataAembitRolesRolesAgentControllers",
    },
    audit_logs: {
      value: dataAembitRolesRolesAuditLogsToHclTerraform(struct!.auditLogs),
      isBlock: true,
      type: "struct",
      storageClassType: "DataAembitRolesRolesAuditLogs",
    },
    client_workloads: {
      value: dataAembitRolesRolesClientWorkloadsToHclTerraform(struct!.clientWorkloads),
      isBlock: true,
      type: "struct",
      storageClassType: "DataAembitRolesRolesClientWorkloads",
    },
    credential_provider_integrations: {
      value: dataAembitRolesRolesCredentialProviderIntegrationsToHclTerraform(struct!.credentialProviderIntegrations),
      isBlock: true,
      type: "struct",
      storageClassType: "DataAembitRolesRolesCredentialProviderIntegrations",
    },
    credential_providers: {
      value: dataAembitRolesRolesCredentialProvidersToHclTerraform(struct!.credentialProviders),
      isBlock: true,
      type: "struct",
      storageClassType: "DataAembitRolesRolesCredentialProviders",
    },
    discovery_integrations: {
      value: dataAembitRolesRolesDiscoveryIntegrationsToHclTerraform(struct!.discoveryIntegrations),
      isBlock: true,
      type: "struct",
      storageClassType: "DataAembitRolesRolesDiscoveryIntegrations",
    },
    global_policy_compliance: {
      value: dataAembitRolesRolesGlobalPolicyComplianceToHclTerraform(struct!.globalPolicyCompliance),
      isBlock: true,
      type: "struct",
      storageClassType: "DataAembitRolesRolesGlobalPolicyCompliance",
    },
    global_policy_compliance_report: {
      value: dataAembitRolesRolesGlobalPolicyComplianceReportToHclTerraform(struct!.globalPolicyComplianceReport),
      isBlock: true,
      type: "struct",
      storageClassType: "DataAembitRolesRolesGlobalPolicyComplianceReport",
    },
    identity_providers: {
      value: dataAembitRolesRolesIdentityProvidersToHclTerraform(struct!.identityProviders),
      isBlock: true,
      type: "struct",
      storageClassType: "DataAembitRolesRolesIdentityProviders",
    },
    integrations: {
      value: dataAembitRolesRolesIntegrationsToHclTerraform(struct!.integrations),
      isBlock: true,
      type: "struct",
      storageClassType: "DataAembitRolesRolesIntegrations",
    },
    log_streams: {
      value: dataAembitRolesRolesLogStreamsToHclTerraform(struct!.logStreams),
      isBlock: true,
      type: "struct",
      storageClassType: "DataAembitRolesRolesLogStreams",
    },
    resource_sets: {
      value: dataAembitRolesRolesResourceSetsToHclTerraform(struct!.resourceSets),
      isBlock: true,
      type: "struct",
      storageClassType: "DataAembitRolesRolesResourceSets",
    },
    roles: {
      value: dataAembitRolesRolesRolesToHclTerraform(struct!.roles),
      isBlock: true,
      type: "struct",
      storageClassType: "DataAembitRolesRolesRoles",
    },
    routing: {
      value: dataAembitRolesRolesRoutingToHclTerraform(struct!.routing),
      isBlock: true,
      type: "struct",
      storageClassType: "DataAembitRolesRolesRouting",
    },
    server_workloads: {
      value: dataAembitRolesRolesServerWorkloadsToHclTerraform(struct!.serverWorkloads),
      isBlock: true,
      type: "struct",
      storageClassType: "DataAembitRolesRolesServerWorkloads",
    },
    signon_policy: {
      value: dataAembitRolesRolesSignonPolicyToHclTerraform(struct!.signonPolicy),
      isBlock: true,
      type: "struct",
      storageClassType: "DataAembitRolesRolesSignonPolicy",
    },
    standalone_certificate_authorities: {
      value: dataAembitRolesRolesStandaloneCertificateAuthoritiesToHclTerraform(struct!.standaloneCertificateAuthorities),
      isBlock: true,
      type: "struct",
      storageClassType: "DataAembitRolesRolesStandaloneCertificateAuthorities",
    },
    trust_providers: {
      value: dataAembitRolesRolesTrustProvidersToHclTerraform(struct!.trustProviders),
      isBlock: true,
      type: "struct",
      storageClassType: "DataAembitRolesRolesTrustProviders",
    },
    users: {
      value: dataAembitRolesRolesUsersToHclTerraform(struct!.users),
      isBlock: true,
      type: "struct",
      storageClassType: "DataAembitRolesRolesUsers",
    },
    workload_events: {
      value: dataAembitRolesRolesWorkloadEventsToHclTerraform(struct!.workloadEvents),
      isBlock: true,
      type: "struct",
      storageClassType: "DataAembitRolesRolesWorkloadEvents",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataAembitRolesRolesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataAembitRolesRoles | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accessAuthorizationEvents?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.accessAuthorizationEvents = this._accessAuthorizationEvents?.internalValue;
    }
    if (this._accessConditions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.accessConditions = this._accessConditions?.internalValue;
    }
    if (this._accessPolicies?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.accessPolicies = this._accessPolicies?.internalValue;
    }
    if (this._agentControllers?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.agentControllers = this._agentControllers?.internalValue;
    }
    if (this._auditLogs?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.auditLogs = this._auditLogs?.internalValue;
    }
    if (this._clientWorkloads?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientWorkloads = this._clientWorkloads?.internalValue;
    }
    if (this._credentialProviderIntegrations?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.credentialProviderIntegrations = this._credentialProviderIntegrations?.internalValue;
    }
    if (this._credentialProviders?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.credentialProviders = this._credentialProviders?.internalValue;
    }
    if (this._discoveryIntegrations?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.discoveryIntegrations = this._discoveryIntegrations?.internalValue;
    }
    if (this._globalPolicyCompliance?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.globalPolicyCompliance = this._globalPolicyCompliance?.internalValue;
    }
    if (this._globalPolicyComplianceReport?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.globalPolicyComplianceReport = this._globalPolicyComplianceReport?.internalValue;
    }
    if (this._identityProviders?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.identityProviders = this._identityProviders?.internalValue;
    }
    if (this._integrations?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.integrations = this._integrations?.internalValue;
    }
    if (this._logStreams?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.logStreams = this._logStreams?.internalValue;
    }
    if (this._resourceSets?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceSets = this._resourceSets?.internalValue;
    }
    if (this._roles?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.roles = this._roles?.internalValue;
    }
    if (this._routing?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.routing = this._routing?.internalValue;
    }
    if (this._serverWorkloads?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.serverWorkloads = this._serverWorkloads?.internalValue;
    }
    if (this._signonPolicy?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.signonPolicy = this._signonPolicy?.internalValue;
    }
    if (this._standaloneCertificateAuthorities?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.standaloneCertificateAuthorities = this._standaloneCertificateAuthorities?.internalValue;
    }
    if (this._trustProviders?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.trustProviders = this._trustProviders?.internalValue;
    }
    if (this._users?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.users = this._users?.internalValue;
    }
    if (this._workloadEvents?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.workloadEvents = this._workloadEvents?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAembitRolesRoles | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._accessAuthorizationEvents.internalValue = undefined;
      this._accessConditions.internalValue = undefined;
      this._accessPolicies.internalValue = undefined;
      this._agentControllers.internalValue = undefined;
      this._auditLogs.internalValue = undefined;
      this._clientWorkloads.internalValue = undefined;
      this._credentialProviderIntegrations.internalValue = undefined;
      this._credentialProviders.internalValue = undefined;
      this._discoveryIntegrations.internalValue = undefined;
      this._globalPolicyCompliance.internalValue = undefined;
      this._globalPolicyComplianceReport.internalValue = undefined;
      this._identityProviders.internalValue = undefined;
      this._integrations.internalValue = undefined;
      this._logStreams.internalValue = undefined;
      this._resourceSets.internalValue = undefined;
      this._roles.internalValue = undefined;
      this._routing.internalValue = undefined;
      this._serverWorkloads.internalValue = undefined;
      this._signonPolicy.internalValue = undefined;
      this._standaloneCertificateAuthorities.internalValue = undefined;
      this._trustProviders.internalValue = undefined;
      this._users.internalValue = undefined;
      this._workloadEvents.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._accessAuthorizationEvents.internalValue = value.accessAuthorizationEvents;
      this._accessConditions.internalValue = value.accessConditions;
      this._accessPolicies.internalValue = value.accessPolicies;
      this._agentControllers.internalValue = value.agentControllers;
      this._auditLogs.internalValue = value.auditLogs;
      this._clientWorkloads.internalValue = value.clientWorkloads;
      this._credentialProviderIntegrations.internalValue = value.credentialProviderIntegrations;
      this._credentialProviders.internalValue = value.credentialProviders;
      this._discoveryIntegrations.internalValue = value.discoveryIntegrations;
      this._globalPolicyCompliance.internalValue = value.globalPolicyCompliance;
      this._globalPolicyComplianceReport.internalValue = value.globalPolicyComplianceReport;
      this._identityProviders.internalValue = value.identityProviders;
      this._integrations.internalValue = value.integrations;
      this._logStreams.internalValue = value.logStreams;
      this._resourceSets.internalValue = value.resourceSets;
      this._roles.internalValue = value.roles;
      this._routing.internalValue = value.routing;
      this._serverWorkloads.internalValue = value.serverWorkloads;
      this._signonPolicy.internalValue = value.signonPolicy;
      this._standaloneCertificateAuthorities.internalValue = value.standaloneCertificateAuthorities;
      this._trustProviders.internalValue = value.trustProviders;
      this._users.internalValue = value.users;
      this._workloadEvents.internalValue = value.workloadEvents;
    }
  }

  // access_authorization_events - computed: true, optional: false, required: true
  private _accessAuthorizationEvents = new DataAembitRolesRolesAccessAuthorizationEventsOutputReference(this, "access_authorization_events");
  public get accessAuthorizationEvents() {
    return this._accessAuthorizationEvents;
  }
  public putAccessAuthorizationEvents(value: DataAembitRolesRolesAccessAuthorizationEvents) {
    this._accessAuthorizationEvents.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get accessAuthorizationEventsInput() {
    return this._accessAuthorizationEvents.internalValue;
  }

  // access_conditions - computed: true, optional: false, required: true
  private _accessConditions = new DataAembitRolesRolesAccessConditionsOutputReference(this, "access_conditions");
  public get accessConditions() {
    return this._accessConditions;
  }
  public putAccessConditions(value: DataAembitRolesRolesAccessConditions) {
    this._accessConditions.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get accessConditionsInput() {
    return this._accessConditions.internalValue;
  }

  // access_policies - computed: true, optional: false, required: true
  private _accessPolicies = new DataAembitRolesRolesAccessPoliciesOutputReference(this, "access_policies");
  public get accessPolicies() {
    return this._accessPolicies;
  }
  public putAccessPolicies(value: DataAembitRolesRolesAccessPolicies) {
    this._accessPolicies.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get accessPoliciesInput() {
    return this._accessPolicies.internalValue;
  }

  // agent_controllers - computed: true, optional: false, required: true
  private _agentControllers = new DataAembitRolesRolesAgentControllersOutputReference(this, "agent_controllers");
  public get agentControllers() {
    return this._agentControllers;
  }
  public putAgentControllers(value: DataAembitRolesRolesAgentControllers) {
    this._agentControllers.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get agentControllersInput() {
    return this._agentControllers.internalValue;
  }

  // audit_logs - computed: true, optional: false, required: true
  private _auditLogs = new DataAembitRolesRolesAuditLogsOutputReference(this, "audit_logs");
  public get auditLogs() {
    return this._auditLogs;
  }
  public putAuditLogs(value: DataAembitRolesRolesAuditLogs) {
    this._auditLogs.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get auditLogsInput() {
    return this._auditLogs.internalValue;
  }

  // client_workloads - computed: true, optional: false, required: true
  private _clientWorkloads = new DataAembitRolesRolesClientWorkloadsOutputReference(this, "client_workloads");
  public get clientWorkloads() {
    return this._clientWorkloads;
  }
  public putClientWorkloads(value: DataAembitRolesRolesClientWorkloads) {
    this._clientWorkloads.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clientWorkloadsInput() {
    return this._clientWorkloads.internalValue;
  }

  // credential_provider_integrations - computed: true, optional: false, required: true
  private _credentialProviderIntegrations = new DataAembitRolesRolesCredentialProviderIntegrationsOutputReference(this, "credential_provider_integrations");
  public get credentialProviderIntegrations() {
    return this._credentialProviderIntegrations;
  }
  public putCredentialProviderIntegrations(value: DataAembitRolesRolesCredentialProviderIntegrations) {
    this._credentialProviderIntegrations.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get credentialProviderIntegrationsInput() {
    return this._credentialProviderIntegrations.internalValue;
  }

  // credential_providers - computed: true, optional: false, required: true
  private _credentialProviders = new DataAembitRolesRolesCredentialProvidersOutputReference(this, "credential_providers");
  public get credentialProviders() {
    return this._credentialProviders;
  }
  public putCredentialProviders(value: DataAembitRolesRolesCredentialProviders) {
    this._credentialProviders.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get credentialProvidersInput() {
    return this._credentialProviders.internalValue;
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // discovery_integrations - computed: true, optional: false, required: true
  private _discoveryIntegrations = new DataAembitRolesRolesDiscoveryIntegrationsOutputReference(this, "discovery_integrations");
  public get discoveryIntegrations() {
    return this._discoveryIntegrations;
  }
  public putDiscoveryIntegrations(value: DataAembitRolesRolesDiscoveryIntegrations) {
    this._discoveryIntegrations.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get discoveryIntegrationsInput() {
    return this._discoveryIntegrations.internalValue;
  }

  // global_policy_compliance - computed: true, optional: false, required: true
  private _globalPolicyCompliance = new DataAembitRolesRolesGlobalPolicyComplianceOutputReference(this, "global_policy_compliance");
  public get globalPolicyCompliance() {
    return this._globalPolicyCompliance;
  }
  public putGlobalPolicyCompliance(value: DataAembitRolesRolesGlobalPolicyCompliance) {
    this._globalPolicyCompliance.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get globalPolicyComplianceInput() {
    return this._globalPolicyCompliance.internalValue;
  }

  // global_policy_compliance_report - computed: true, optional: false, required: true
  private _globalPolicyComplianceReport = new DataAembitRolesRolesGlobalPolicyComplianceReportOutputReference(this, "global_policy_compliance_report");
  public get globalPolicyComplianceReport() {
    return this._globalPolicyComplianceReport;
  }
  public putGlobalPolicyComplianceReport(value: DataAembitRolesRolesGlobalPolicyComplianceReport) {
    this._globalPolicyComplianceReport.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get globalPolicyComplianceReportInput() {
    return this._globalPolicyComplianceReport.internalValue;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // identity_providers - computed: true, optional: false, required: true
  private _identityProviders = new DataAembitRolesRolesIdentityProvidersOutputReference(this, "identity_providers");
  public get identityProviders() {
    return this._identityProviders;
  }
  public putIdentityProviders(value: DataAembitRolesRolesIdentityProviders) {
    this._identityProviders.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get identityProvidersInput() {
    return this._identityProviders.internalValue;
  }

  // integrations - computed: true, optional: false, required: true
  private _integrations = new DataAembitRolesRolesIntegrationsOutputReference(this, "integrations");
  public get integrations() {
    return this._integrations;
  }
  public putIntegrations(value: DataAembitRolesRolesIntegrations) {
    this._integrations.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get integrationsInput() {
    return this._integrations.internalValue;
  }

  // is_active - computed: true, optional: false, required: false
  public get isActive() {
    return this.getBooleanAttribute('is_active');
  }

  // log_streams - computed: true, optional: false, required: true
  private _logStreams = new DataAembitRolesRolesLogStreamsOutputReference(this, "log_streams");
  public get logStreams() {
    return this._logStreams;
  }
  public putLogStreams(value: DataAembitRolesRolesLogStreams) {
    this._logStreams.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get logStreamsInput() {
    return this._logStreams.internalValue;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // resource_sets - computed: true, optional: false, required: true
  private _resourceSets = new DataAembitRolesRolesResourceSetsOutputReference(this, "resource_sets");
  public get resourceSets() {
    return this._resourceSets;
  }
  public putResourceSets(value: DataAembitRolesRolesResourceSets) {
    this._resourceSets.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceSetsInput() {
    return this._resourceSets.internalValue;
  }

  // resource_sets_assignments - computed: true, optional: false, required: false
  public get resourceSetsAssignments() {
    return cdktf.Fn.tolist(this.getListAttribute('resource_sets_assignments'));
  }

  // roles - computed: true, optional: false, required: true
  private _roles = new DataAembitRolesRolesRolesOutputReference(this, "roles");
  public get roles() {
    return this._roles;
  }
  public putRoles(value: DataAembitRolesRolesRoles) {
    this._roles.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get rolesInput() {
    return this._roles.internalValue;
  }

  // routing - computed: true, optional: false, required: true
  private _routing = new DataAembitRolesRolesRoutingOutputReference(this, "routing");
  public get routing() {
    return this._routing;
  }
  public putRouting(value: DataAembitRolesRolesRouting) {
    this._routing.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get routingInput() {
    return this._routing.internalValue;
  }

  // server_workloads - computed: true, optional: false, required: true
  private _serverWorkloads = new DataAembitRolesRolesServerWorkloadsOutputReference(this, "server_workloads");
  public get serverWorkloads() {
    return this._serverWorkloads;
  }
  public putServerWorkloads(value: DataAembitRolesRolesServerWorkloads) {
    this._serverWorkloads.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serverWorkloadsInput() {
    return this._serverWorkloads.internalValue;
  }

  // signon_policy - computed: true, optional: false, required: true
  private _signonPolicy = new DataAembitRolesRolesSignonPolicyOutputReference(this, "signon_policy");
  public get signonPolicy() {
    return this._signonPolicy;
  }
  public putSignonPolicy(value: DataAembitRolesRolesSignonPolicy) {
    this._signonPolicy.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get signonPolicyInput() {
    return this._signonPolicy.internalValue;
  }

  // standalone_certificate_authorities - computed: true, optional: false, required: true
  private _standaloneCertificateAuthorities = new DataAembitRolesRolesStandaloneCertificateAuthoritiesOutputReference(this, "standalone_certificate_authorities");
  public get standaloneCertificateAuthorities() {
    return this._standaloneCertificateAuthorities;
  }
  public putStandaloneCertificateAuthorities(value: DataAembitRolesRolesStandaloneCertificateAuthorities) {
    this._standaloneCertificateAuthorities.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get standaloneCertificateAuthoritiesInput() {
    return this._standaloneCertificateAuthorities.internalValue;
  }

  // tags - computed: true, optional: false, required: false
  private _tags = new cdktf.StringMap(this, "tags");
  public get tags() {
    return this._tags;
  }

  // trust_providers - computed: true, optional: false, required: true
  private _trustProviders = new DataAembitRolesRolesTrustProvidersOutputReference(this, "trust_providers");
  public get trustProviders() {
    return this._trustProviders;
  }
  public putTrustProviders(value: DataAembitRolesRolesTrustProviders) {
    this._trustProviders.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get trustProvidersInput() {
    return this._trustProviders.internalValue;
  }

  // users - computed: true, optional: false, required: true
  private _users = new DataAembitRolesRolesUsersOutputReference(this, "users");
  public get users() {
    return this._users;
  }
  public putUsers(value: DataAembitRolesRolesUsers) {
    this._users.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get usersInput() {
    return this._users.internalValue;
  }

  // workload_events - computed: true, optional: false, required: true
  private _workloadEvents = new DataAembitRolesRolesWorkloadEventsOutputReference(this, "workload_events");
  public get workloadEvents() {
    return this._workloadEvents;
  }
  public putWorkloadEvents(value: DataAembitRolesRolesWorkloadEvents) {
    this._workloadEvents.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get workloadEventsInput() {
    return this._workloadEvents.internalValue;
  }
}

export class DataAembitRolesRolesList extends cdktf.ComplexList {
  public internalValue? : DataAembitRolesRoles[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataAembitRolesRolesOutputReference {
    return new DataAembitRolesRolesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/aembit/aembit/1.25.1/docs/data-sources/roles aembit_roles}
*/
export class DataAembitRoles extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aembit_roles";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataAembitRoles resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAembitRoles to import
  * @param importFromId The id of the existing DataAembitRoles that should be imported. Refer to the {@link https://registry.terraform.io/providers/aembit/aembit/1.25.1/docs/data-sources/roles#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAembitRoles to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aembit_roles", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aembit/aembit/1.25.1/docs/data-sources/roles aembit_roles} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAembitRolesConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataAembitRolesConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'aembit_roles',
      terraformGeneratorMetadata: {
        providerName: 'aembit',
        providerVersion: '1.25.1',
        providerVersionConstraint: '1.25.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // roles - computed: true, optional: false, required: false
  private _roles = new DataAembitRolesRolesList(this, "roles", false);
  public get roles() {
    return this._roles;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
    };
    return attrs;
  }
}
