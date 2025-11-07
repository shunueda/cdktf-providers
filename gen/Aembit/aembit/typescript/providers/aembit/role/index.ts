// https://registry.terraform.io/providers/aembit/aembit/1.25.1/docs/resources/role
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface RoleConfig extends cdktf.TerraformMetaArguments {
  /**
  * Permissions for Access Authorization Event resources.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aembit/aembit/1.25.1/docs/resources/role#access_authorization_events Role#access_authorization_events}
  */
  readonly accessAuthorizationEvents: RoleAccessAuthorizationEvents;
  /**
  * Permissions for Access Condition resources.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aembit/aembit/1.25.1/docs/resources/role#access_conditions Role#access_conditions}
  */
  readonly accessConditions: RoleAccessConditions;
  /**
  * Permissions for Access Policy resources.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aembit/aembit/1.25.1/docs/resources/role#access_policies Role#access_policies}
  */
  readonly accessPolicies: RoleAccessPolicies;
  /**
  * Permissions for Agent Controller resources.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aembit/aembit/1.25.1/docs/resources/role#agent_controllers Role#agent_controllers}
  */
  readonly agentControllers: RoleAgentControllers;
  /**
  * Permissions for Audit Log resources.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aembit/aembit/1.25.1/docs/resources/role#audit_logs Role#audit_logs}
  */
  readonly auditLogs: RoleAuditLogs;
  /**
  * Permissions for Client Workload resources.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aembit/aembit/1.25.1/docs/resources/role#client_workloads Role#client_workloads}
  */
  readonly clientWorkloads: RoleClientWorkloads;
  /**
  * Permissions for Credential Provider Integration resources.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aembit/aembit/1.25.1/docs/resources/role#credential_provider_integrations Role#credential_provider_integrations}
  */
  readonly credentialProviderIntegrations: RoleCredentialProviderIntegrations;
  /**
  * Permissions for Credential Provider resources.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aembit/aembit/1.25.1/docs/resources/role#credential_providers Role#credential_providers}
  */
  readonly credentialProviders: RoleCredentialProviders;
  /**
  * Description for the Role.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aembit/aembit/1.25.1/docs/resources/role#description Role#description}
  */
  readonly description?: string;
  /**
  * Permissions for Discovery Integration resources.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aembit/aembit/1.25.1/docs/resources/role#discovery_integrations Role#discovery_integrations}
  */
  readonly discoveryIntegrations: RoleDiscoveryIntegrations;
  /**
  * Permissions for Global Policy Compliance resources.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aembit/aembit/1.25.1/docs/resources/role#global_policy_compliance Role#global_policy_compliance}
  */
  readonly globalPolicyCompliance: RoleGlobalPolicyCompliance;
  /**
  * Permissions for Global Policy Compliance Report resources.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aembit/aembit/1.25.1/docs/resources/role#global_policy_compliance_report Role#global_policy_compliance_report}
  */
  readonly globalPolicyComplianceReport: RoleGlobalPolicyComplianceReport;
  /**
  * Permissions for Identity Provider resources.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aembit/aembit/1.25.1/docs/resources/role#identity_providers Role#identity_providers}
  */
  readonly identityProviders: RoleIdentityProviders;
  /**
  * Permissions for Integration resources.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aembit/aembit/1.25.1/docs/resources/role#integrations Role#integrations}
  */
  readonly integrations: RoleIntegrations;
  /**
  * Active status of the Role.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aembit/aembit/1.25.1/docs/resources/role#is_active Role#is_active}
  */
  readonly isActive?: boolean | cdktf.IResolvable;
  /**
  * Permissions for Log Stream resources.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aembit/aembit/1.25.1/docs/resources/role#log_streams Role#log_streams}
  */
  readonly logStreams: RoleLogStreams;
  /**
  * Name for the Role.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aembit/aembit/1.25.1/docs/resources/role#name Role#name}
  */
  readonly name: string;
  /**
  * Permissions for Resource Set resources.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aembit/aembit/1.25.1/docs/resources/role#resource_sets Role#resource_sets}
  */
  readonly resourceSets: RoleResourceSets;
  /**
  * IDs of the ResourceSets associated with this Role.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aembit/aembit/1.25.1/docs/resources/role#resource_sets_assignments Role#resource_sets_assignments}
  */
  readonly resourceSetsAssignments?: string[];
  /**
  * Permissions for Role resources.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aembit/aembit/1.25.1/docs/resources/role#roles Role#roles}
  */
  readonly roles: RoleRoles;
  /**
  * Permissions for Routing Configuration resources.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aembit/aembit/1.25.1/docs/resources/role#routing Role#routing}
  */
  readonly routing: RoleRouting;
  /**
  * Permissions for Server Workload resources.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aembit/aembit/1.25.1/docs/resources/role#server_workloads Role#server_workloads}
  */
  readonly serverWorkloads: RoleServerWorkloads;
  /**
  * Permissions for SignOn Policy resources.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aembit/aembit/1.25.1/docs/resources/role#signon_policy Role#signon_policy}
  */
  readonly signonPolicy: RoleSignonPolicy;
  /**
  * Permissions for Standalone Certificate Authority resources.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aembit/aembit/1.25.1/docs/resources/role#standalone_certificate_authorities Role#standalone_certificate_authorities}
  */
  readonly standaloneCertificateAuthorities: RoleStandaloneCertificateAuthorities;
  /**
  * Tags are key-value pairs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aembit/aembit/1.25.1/docs/resources/role#tags Role#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Permissions for Trust Provider resources.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aembit/aembit/1.25.1/docs/resources/role#trust_providers Role#trust_providers}
  */
  readonly trustProviders: RoleTrustProviders;
  /**
  * Permissions for User resources.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aembit/aembit/1.25.1/docs/resources/role#users Role#users}
  */
  readonly users: RoleUsers;
  /**
  * Permissions for Workload Event resources.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aembit/aembit/1.25.1/docs/resources/role#workload_events Role#workload_events}
  */
  readonly workloadEvents: RoleWorkloadEvents;
}
export interface RoleAccessAuthorizationEvents {
  /**
  * True if this Role should be able to query and view Access Authorization Event data.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aembit/aembit/1.25.1/docs/resources/role#read Role#read}
  */
  readonly read: boolean | cdktf.IResolvable;
}

export function roleAccessAuthorizationEventsToTerraform(struct?: RoleAccessAuthorizationEvents | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    read: cdktf.booleanToTerraform(struct!.read),
  }
}


export function roleAccessAuthorizationEventsToHclTerraform(struct?: RoleAccessAuthorizationEvents | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    read: {
      value: cdktf.booleanToHclTerraform(struct!.read),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RoleAccessAuthorizationEventsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): RoleAccessAuthorizationEvents | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._read !== undefined) {
      hasAnyValues = true;
      internalValueResult.read = this._read;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RoleAccessAuthorizationEvents | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._read = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._read = value.read;
    }
  }

  // read - computed: false, optional: false, required: true
  private _read?: boolean | cdktf.IResolvable; 
  public get read() {
    return this.getBooleanAttribute('read');
  }
  public set read(value: boolean | cdktf.IResolvable) {
    this._read = value;
  }
  // Temporarily expose input value. Use with caution.
  public get readInput() {
    return this._read;
  }
}
export interface RoleAccessConditions {
  /**
  * True if this Role should be able to query and view Access Condition resources.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aembit/aembit/1.25.1/docs/resources/role#read Role#read}
  */
  readonly read: boolean | cdktf.IResolvable;
  /**
  * True if this Role should be able to create and update Access Condition resources.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aembit/aembit/1.25.1/docs/resources/role#write Role#write}
  */
  readonly write: boolean | cdktf.IResolvable;
}

export function roleAccessConditionsToTerraform(struct?: RoleAccessConditions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    read: cdktf.booleanToTerraform(struct!.read),
    write: cdktf.booleanToTerraform(struct!.write),
  }
}


export function roleAccessConditionsToHclTerraform(struct?: RoleAccessConditions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    read: {
      value: cdktf.booleanToHclTerraform(struct!.read),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    write: {
      value: cdktf.booleanToHclTerraform(struct!.write),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RoleAccessConditionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): RoleAccessConditions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._read !== undefined) {
      hasAnyValues = true;
      internalValueResult.read = this._read;
    }
    if (this._write !== undefined) {
      hasAnyValues = true;
      internalValueResult.write = this._write;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RoleAccessConditions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._read = undefined;
      this._write = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._read = value.read;
      this._write = value.write;
    }
  }

  // read - computed: false, optional: false, required: true
  private _read?: boolean | cdktf.IResolvable; 
  public get read() {
    return this.getBooleanAttribute('read');
  }
  public set read(value: boolean | cdktf.IResolvable) {
    this._read = value;
  }
  // Temporarily expose input value. Use with caution.
  public get readInput() {
    return this._read;
  }

  // write - computed: false, optional: false, required: true
  private _write?: boolean | cdktf.IResolvable; 
  public get write() {
    return this.getBooleanAttribute('write');
  }
  public set write(value: boolean | cdktf.IResolvable) {
    this._write = value;
  }
  // Temporarily expose input value. Use with caution.
  public get writeInput() {
    return this._write;
  }
}
export interface RoleAccessPolicies {
  /**
  * True if this Role should be able to query and view Access Policy resources.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aembit/aembit/1.25.1/docs/resources/role#read Role#read}
  */
  readonly read: boolean | cdktf.IResolvable;
  /**
  * True if this Role should be able to create and update Access Policy resources.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aembit/aembit/1.25.1/docs/resources/role#write Role#write}
  */
  readonly write: boolean | cdktf.IResolvable;
}

export function roleAccessPoliciesToTerraform(struct?: RoleAccessPolicies | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    read: cdktf.booleanToTerraform(struct!.read),
    write: cdktf.booleanToTerraform(struct!.write),
  }
}


export function roleAccessPoliciesToHclTerraform(struct?: RoleAccessPolicies | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    read: {
      value: cdktf.booleanToHclTerraform(struct!.read),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    write: {
      value: cdktf.booleanToHclTerraform(struct!.write),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RoleAccessPoliciesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): RoleAccessPolicies | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._read !== undefined) {
      hasAnyValues = true;
      internalValueResult.read = this._read;
    }
    if (this._write !== undefined) {
      hasAnyValues = true;
      internalValueResult.write = this._write;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RoleAccessPolicies | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._read = undefined;
      this._write = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._read = value.read;
      this._write = value.write;
    }
  }

  // read - computed: false, optional: false, required: true
  private _read?: boolean | cdktf.IResolvable; 
  public get read() {
    return this.getBooleanAttribute('read');
  }
  public set read(value: boolean | cdktf.IResolvable) {
    this._read = value;
  }
  // Temporarily expose input value. Use with caution.
  public get readInput() {
    return this._read;
  }

  // write - computed: false, optional: false, required: true
  private _write?: boolean | cdktf.IResolvable; 
  public get write() {
    return this.getBooleanAttribute('write');
  }
  public set write(value: boolean | cdktf.IResolvable) {
    this._write = value;
  }
  // Temporarily expose input value. Use with caution.
  public get writeInput() {
    return this._write;
  }
}
export interface RoleAgentControllers {
  /**
  * True if this Role should be able to query and view Agent Controller resources.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aembit/aembit/1.25.1/docs/resources/role#read Role#read}
  */
  readonly read: boolean | cdktf.IResolvable;
  /**
  * True if this Role should be able to create and update Agent Controller resources.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aembit/aembit/1.25.1/docs/resources/role#write Role#write}
  */
  readonly write: boolean | cdktf.IResolvable;
}

export function roleAgentControllersToTerraform(struct?: RoleAgentControllers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    read: cdktf.booleanToTerraform(struct!.read),
    write: cdktf.booleanToTerraform(struct!.write),
  }
}


export function roleAgentControllersToHclTerraform(struct?: RoleAgentControllers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    read: {
      value: cdktf.booleanToHclTerraform(struct!.read),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    write: {
      value: cdktf.booleanToHclTerraform(struct!.write),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RoleAgentControllersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): RoleAgentControllers | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._read !== undefined) {
      hasAnyValues = true;
      internalValueResult.read = this._read;
    }
    if (this._write !== undefined) {
      hasAnyValues = true;
      internalValueResult.write = this._write;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RoleAgentControllers | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._read = undefined;
      this._write = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._read = value.read;
      this._write = value.write;
    }
  }

  // read - computed: false, optional: false, required: true
  private _read?: boolean | cdktf.IResolvable; 
  public get read() {
    return this.getBooleanAttribute('read');
  }
  public set read(value: boolean | cdktf.IResolvable) {
    this._read = value;
  }
  // Temporarily expose input value. Use with caution.
  public get readInput() {
    return this._read;
  }

  // write - computed: false, optional: false, required: true
  private _write?: boolean | cdktf.IResolvable; 
  public get write() {
    return this.getBooleanAttribute('write');
  }
  public set write(value: boolean | cdktf.IResolvable) {
    this._write = value;
  }
  // Temporarily expose input value. Use with caution.
  public get writeInput() {
    return this._write;
  }
}
export interface RoleAuditLogs {
  /**
  * True if this Role should be able to query and view Audit Log data.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aembit/aembit/1.25.1/docs/resources/role#read Role#read}
  */
  readonly read: boolean | cdktf.IResolvable;
}

export function roleAuditLogsToTerraform(struct?: RoleAuditLogs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    read: cdktf.booleanToTerraform(struct!.read),
  }
}


export function roleAuditLogsToHclTerraform(struct?: RoleAuditLogs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    read: {
      value: cdktf.booleanToHclTerraform(struct!.read),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RoleAuditLogsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): RoleAuditLogs | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._read !== undefined) {
      hasAnyValues = true;
      internalValueResult.read = this._read;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RoleAuditLogs | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._read = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._read = value.read;
    }
  }

  // read - computed: false, optional: false, required: true
  private _read?: boolean | cdktf.IResolvable; 
  public get read() {
    return this.getBooleanAttribute('read');
  }
  public set read(value: boolean | cdktf.IResolvable) {
    this._read = value;
  }
  // Temporarily expose input value. Use with caution.
  public get readInput() {
    return this._read;
  }
}
export interface RoleClientWorkloads {
  /**
  * True if this Role should be able to query and view Client Workload resources.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aembit/aembit/1.25.1/docs/resources/role#read Role#read}
  */
  readonly read: boolean | cdktf.IResolvable;
  /**
  * True if this Role should be able to create and update Client Workload resources.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aembit/aembit/1.25.1/docs/resources/role#write Role#write}
  */
  readonly write: boolean | cdktf.IResolvable;
}

export function roleClientWorkloadsToTerraform(struct?: RoleClientWorkloads | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    read: cdktf.booleanToTerraform(struct!.read),
    write: cdktf.booleanToTerraform(struct!.write),
  }
}


export function roleClientWorkloadsToHclTerraform(struct?: RoleClientWorkloads | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    read: {
      value: cdktf.booleanToHclTerraform(struct!.read),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    write: {
      value: cdktf.booleanToHclTerraform(struct!.write),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RoleClientWorkloadsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): RoleClientWorkloads | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._read !== undefined) {
      hasAnyValues = true;
      internalValueResult.read = this._read;
    }
    if (this._write !== undefined) {
      hasAnyValues = true;
      internalValueResult.write = this._write;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RoleClientWorkloads | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._read = undefined;
      this._write = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._read = value.read;
      this._write = value.write;
    }
  }

  // read - computed: false, optional: false, required: true
  private _read?: boolean | cdktf.IResolvable; 
  public get read() {
    return this.getBooleanAttribute('read');
  }
  public set read(value: boolean | cdktf.IResolvable) {
    this._read = value;
  }
  // Temporarily expose input value. Use with caution.
  public get readInput() {
    return this._read;
  }

  // write - computed: false, optional: false, required: true
  private _write?: boolean | cdktf.IResolvable; 
  public get write() {
    return this.getBooleanAttribute('write');
  }
  public set write(value: boolean | cdktf.IResolvable) {
    this._write = value;
  }
  // Temporarily expose input value. Use with caution.
  public get writeInput() {
    return this._write;
  }
}
export interface RoleCredentialProviderIntegrations {
  /**
  * True if this Role should be able to query and view Credential Provider Integration resources.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aembit/aembit/1.25.1/docs/resources/role#read Role#read}
  */
  readonly read: boolean | cdktf.IResolvable;
  /**
  * True if this Role should be able to create and update Credential Provider Integration resources.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aembit/aembit/1.25.1/docs/resources/role#write Role#write}
  */
  readonly write: boolean | cdktf.IResolvable;
}

export function roleCredentialProviderIntegrationsToTerraform(struct?: RoleCredentialProviderIntegrations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    read: cdktf.booleanToTerraform(struct!.read),
    write: cdktf.booleanToTerraform(struct!.write),
  }
}


export function roleCredentialProviderIntegrationsToHclTerraform(struct?: RoleCredentialProviderIntegrations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    read: {
      value: cdktf.booleanToHclTerraform(struct!.read),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    write: {
      value: cdktf.booleanToHclTerraform(struct!.write),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RoleCredentialProviderIntegrationsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): RoleCredentialProviderIntegrations | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._read !== undefined) {
      hasAnyValues = true;
      internalValueResult.read = this._read;
    }
    if (this._write !== undefined) {
      hasAnyValues = true;
      internalValueResult.write = this._write;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RoleCredentialProviderIntegrations | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._read = undefined;
      this._write = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._read = value.read;
      this._write = value.write;
    }
  }

  // read - computed: false, optional: false, required: true
  private _read?: boolean | cdktf.IResolvable; 
  public get read() {
    return this.getBooleanAttribute('read');
  }
  public set read(value: boolean | cdktf.IResolvable) {
    this._read = value;
  }
  // Temporarily expose input value. Use with caution.
  public get readInput() {
    return this._read;
  }

  // write - computed: false, optional: false, required: true
  private _write?: boolean | cdktf.IResolvable; 
  public get write() {
    return this.getBooleanAttribute('write');
  }
  public set write(value: boolean | cdktf.IResolvable) {
    this._write = value;
  }
  // Temporarily expose input value. Use with caution.
  public get writeInput() {
    return this._write;
  }
}
export interface RoleCredentialProviders {
  /**
  * True if this Role should be able to query and view Credential Provider resources.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aembit/aembit/1.25.1/docs/resources/role#read Role#read}
  */
  readonly read: boolean | cdktf.IResolvable;
  /**
  * True if this Role should be able to create and update Credential Provider resources.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aembit/aembit/1.25.1/docs/resources/role#write Role#write}
  */
  readonly write: boolean | cdktf.IResolvable;
}

export function roleCredentialProvidersToTerraform(struct?: RoleCredentialProviders | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    read: cdktf.booleanToTerraform(struct!.read),
    write: cdktf.booleanToTerraform(struct!.write),
  }
}


export function roleCredentialProvidersToHclTerraform(struct?: RoleCredentialProviders | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    read: {
      value: cdktf.booleanToHclTerraform(struct!.read),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    write: {
      value: cdktf.booleanToHclTerraform(struct!.write),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RoleCredentialProvidersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): RoleCredentialProviders | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._read !== undefined) {
      hasAnyValues = true;
      internalValueResult.read = this._read;
    }
    if (this._write !== undefined) {
      hasAnyValues = true;
      internalValueResult.write = this._write;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RoleCredentialProviders | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._read = undefined;
      this._write = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._read = value.read;
      this._write = value.write;
    }
  }

  // read - computed: false, optional: false, required: true
  private _read?: boolean | cdktf.IResolvable; 
  public get read() {
    return this.getBooleanAttribute('read');
  }
  public set read(value: boolean | cdktf.IResolvable) {
    this._read = value;
  }
  // Temporarily expose input value. Use with caution.
  public get readInput() {
    return this._read;
  }

  // write - computed: false, optional: false, required: true
  private _write?: boolean | cdktf.IResolvable; 
  public get write() {
    return this.getBooleanAttribute('write');
  }
  public set write(value: boolean | cdktf.IResolvable) {
    this._write = value;
  }
  // Temporarily expose input value. Use with caution.
  public get writeInput() {
    return this._write;
  }
}
export interface RoleDiscoveryIntegrations {
  /**
  * True if this Role should be able to query and view Discovery Integration resources.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aembit/aembit/1.25.1/docs/resources/role#read Role#read}
  */
  readonly read: boolean | cdktf.IResolvable;
  /**
  * True if this Role should be able to create and update Discovery Integration resources.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aembit/aembit/1.25.1/docs/resources/role#write Role#write}
  */
  readonly write: boolean | cdktf.IResolvable;
}

export function roleDiscoveryIntegrationsToTerraform(struct?: RoleDiscoveryIntegrations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    read: cdktf.booleanToTerraform(struct!.read),
    write: cdktf.booleanToTerraform(struct!.write),
  }
}


export function roleDiscoveryIntegrationsToHclTerraform(struct?: RoleDiscoveryIntegrations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    read: {
      value: cdktf.booleanToHclTerraform(struct!.read),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    write: {
      value: cdktf.booleanToHclTerraform(struct!.write),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RoleDiscoveryIntegrationsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): RoleDiscoveryIntegrations | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._read !== undefined) {
      hasAnyValues = true;
      internalValueResult.read = this._read;
    }
    if (this._write !== undefined) {
      hasAnyValues = true;
      internalValueResult.write = this._write;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RoleDiscoveryIntegrations | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._read = undefined;
      this._write = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._read = value.read;
      this._write = value.write;
    }
  }

  // read - computed: false, optional: false, required: true
  private _read?: boolean | cdktf.IResolvable; 
  public get read() {
    return this.getBooleanAttribute('read');
  }
  public set read(value: boolean | cdktf.IResolvable) {
    this._read = value;
  }
  // Temporarily expose input value. Use with caution.
  public get readInput() {
    return this._read;
  }

  // write - computed: false, optional: false, required: true
  private _write?: boolean | cdktf.IResolvable; 
  public get write() {
    return this.getBooleanAttribute('write');
  }
  public set write(value: boolean | cdktf.IResolvable) {
    this._write = value;
  }
  // Temporarily expose input value. Use with caution.
  public get writeInput() {
    return this._write;
  }
}
export interface RoleGlobalPolicyCompliance {
  /**
  * True if this Role should be able to query and view Global Policy Compliance resources.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aembit/aembit/1.25.1/docs/resources/role#read Role#read}
  */
  readonly read: boolean | cdktf.IResolvable;
  /**
  * True if this Role should be able to create and update Global Policy Compliance resources.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aembit/aembit/1.25.1/docs/resources/role#write Role#write}
  */
  readonly write: boolean | cdktf.IResolvable;
}

export function roleGlobalPolicyComplianceToTerraform(struct?: RoleGlobalPolicyCompliance | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    read: cdktf.booleanToTerraform(struct!.read),
    write: cdktf.booleanToTerraform(struct!.write),
  }
}


export function roleGlobalPolicyComplianceToHclTerraform(struct?: RoleGlobalPolicyCompliance | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    read: {
      value: cdktf.booleanToHclTerraform(struct!.read),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    write: {
      value: cdktf.booleanToHclTerraform(struct!.write),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RoleGlobalPolicyComplianceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): RoleGlobalPolicyCompliance | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._read !== undefined) {
      hasAnyValues = true;
      internalValueResult.read = this._read;
    }
    if (this._write !== undefined) {
      hasAnyValues = true;
      internalValueResult.write = this._write;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RoleGlobalPolicyCompliance | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._read = undefined;
      this._write = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._read = value.read;
      this._write = value.write;
    }
  }

  // read - computed: false, optional: false, required: true
  private _read?: boolean | cdktf.IResolvable; 
  public get read() {
    return this.getBooleanAttribute('read');
  }
  public set read(value: boolean | cdktf.IResolvable) {
    this._read = value;
  }
  // Temporarily expose input value. Use with caution.
  public get readInput() {
    return this._read;
  }

  // write - computed: false, optional: false, required: true
  private _write?: boolean | cdktf.IResolvable; 
  public get write() {
    return this.getBooleanAttribute('write');
  }
  public set write(value: boolean | cdktf.IResolvable) {
    this._write = value;
  }
  // Temporarily expose input value. Use with caution.
  public get writeInput() {
    return this._write;
  }
}
export interface RoleGlobalPolicyComplianceReport {
  /**
  * True if this Role should be able to query and view Global Policy Compliance Report data.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aembit/aembit/1.25.1/docs/resources/role#read Role#read}
  */
  readonly read: boolean | cdktf.IResolvable;
}

export function roleGlobalPolicyComplianceReportToTerraform(struct?: RoleGlobalPolicyComplianceReport | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    read: cdktf.booleanToTerraform(struct!.read),
  }
}


export function roleGlobalPolicyComplianceReportToHclTerraform(struct?: RoleGlobalPolicyComplianceReport | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    read: {
      value: cdktf.booleanToHclTerraform(struct!.read),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RoleGlobalPolicyComplianceReportOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): RoleGlobalPolicyComplianceReport | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._read !== undefined) {
      hasAnyValues = true;
      internalValueResult.read = this._read;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RoleGlobalPolicyComplianceReport | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._read = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._read = value.read;
    }
  }

  // read - computed: false, optional: false, required: true
  private _read?: boolean | cdktf.IResolvable; 
  public get read() {
    return this.getBooleanAttribute('read');
  }
  public set read(value: boolean | cdktf.IResolvable) {
    this._read = value;
  }
  // Temporarily expose input value. Use with caution.
  public get readInput() {
    return this._read;
  }
}
export interface RoleIdentityProviders {
  /**
  * True if this Role should be able to query and view Identity Provider resources.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aembit/aembit/1.25.1/docs/resources/role#read Role#read}
  */
  readonly read: boolean | cdktf.IResolvable;
  /**
  * True if this Role should be able to create and update Identity Provider resources.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aembit/aembit/1.25.1/docs/resources/role#write Role#write}
  */
  readonly write: boolean | cdktf.IResolvable;
}

export function roleIdentityProvidersToTerraform(struct?: RoleIdentityProviders | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    read: cdktf.booleanToTerraform(struct!.read),
    write: cdktf.booleanToTerraform(struct!.write),
  }
}


export function roleIdentityProvidersToHclTerraform(struct?: RoleIdentityProviders | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    read: {
      value: cdktf.booleanToHclTerraform(struct!.read),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    write: {
      value: cdktf.booleanToHclTerraform(struct!.write),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RoleIdentityProvidersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): RoleIdentityProviders | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._read !== undefined) {
      hasAnyValues = true;
      internalValueResult.read = this._read;
    }
    if (this._write !== undefined) {
      hasAnyValues = true;
      internalValueResult.write = this._write;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RoleIdentityProviders | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._read = undefined;
      this._write = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._read = value.read;
      this._write = value.write;
    }
  }

  // read - computed: false, optional: false, required: true
  private _read?: boolean | cdktf.IResolvable; 
  public get read() {
    return this.getBooleanAttribute('read');
  }
  public set read(value: boolean | cdktf.IResolvable) {
    this._read = value;
  }
  // Temporarily expose input value. Use with caution.
  public get readInput() {
    return this._read;
  }

  // write - computed: false, optional: false, required: true
  private _write?: boolean | cdktf.IResolvable; 
  public get write() {
    return this.getBooleanAttribute('write');
  }
  public set write(value: boolean | cdktf.IResolvable) {
    this._write = value;
  }
  // Temporarily expose input value. Use with caution.
  public get writeInput() {
    return this._write;
  }
}
export interface RoleIntegrations {
  /**
  * True if this Role should be able to query and view Integration resources.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aembit/aembit/1.25.1/docs/resources/role#read Role#read}
  */
  readonly read: boolean | cdktf.IResolvable;
  /**
  * True if this Role should be able to create and update Integration resources.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aembit/aembit/1.25.1/docs/resources/role#write Role#write}
  */
  readonly write: boolean | cdktf.IResolvable;
}

export function roleIntegrationsToTerraform(struct?: RoleIntegrations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    read: cdktf.booleanToTerraform(struct!.read),
    write: cdktf.booleanToTerraform(struct!.write),
  }
}


export function roleIntegrationsToHclTerraform(struct?: RoleIntegrations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    read: {
      value: cdktf.booleanToHclTerraform(struct!.read),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    write: {
      value: cdktf.booleanToHclTerraform(struct!.write),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RoleIntegrationsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): RoleIntegrations | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._read !== undefined) {
      hasAnyValues = true;
      internalValueResult.read = this._read;
    }
    if (this._write !== undefined) {
      hasAnyValues = true;
      internalValueResult.write = this._write;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RoleIntegrations | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._read = undefined;
      this._write = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._read = value.read;
      this._write = value.write;
    }
  }

  // read - computed: false, optional: false, required: true
  private _read?: boolean | cdktf.IResolvable; 
  public get read() {
    return this.getBooleanAttribute('read');
  }
  public set read(value: boolean | cdktf.IResolvable) {
    this._read = value;
  }
  // Temporarily expose input value. Use with caution.
  public get readInput() {
    return this._read;
  }

  // write - computed: false, optional: false, required: true
  private _write?: boolean | cdktf.IResolvable; 
  public get write() {
    return this.getBooleanAttribute('write');
  }
  public set write(value: boolean | cdktf.IResolvable) {
    this._write = value;
  }
  // Temporarily expose input value. Use with caution.
  public get writeInput() {
    return this._write;
  }
}
export interface RoleLogStreams {
  /**
  * True if this Role should be able to query and view Log Stream resources.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aembit/aembit/1.25.1/docs/resources/role#read Role#read}
  */
  readonly read: boolean | cdktf.IResolvable;
  /**
  * True if this Role should be able to create and update Log Stream resources.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aembit/aembit/1.25.1/docs/resources/role#write Role#write}
  */
  readonly write: boolean | cdktf.IResolvable;
}

export function roleLogStreamsToTerraform(struct?: RoleLogStreams | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    read: cdktf.booleanToTerraform(struct!.read),
    write: cdktf.booleanToTerraform(struct!.write),
  }
}


export function roleLogStreamsToHclTerraform(struct?: RoleLogStreams | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    read: {
      value: cdktf.booleanToHclTerraform(struct!.read),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    write: {
      value: cdktf.booleanToHclTerraform(struct!.write),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RoleLogStreamsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): RoleLogStreams | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._read !== undefined) {
      hasAnyValues = true;
      internalValueResult.read = this._read;
    }
    if (this._write !== undefined) {
      hasAnyValues = true;
      internalValueResult.write = this._write;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RoleLogStreams | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._read = undefined;
      this._write = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._read = value.read;
      this._write = value.write;
    }
  }

  // read - computed: false, optional: false, required: true
  private _read?: boolean | cdktf.IResolvable; 
  public get read() {
    return this.getBooleanAttribute('read');
  }
  public set read(value: boolean | cdktf.IResolvable) {
    this._read = value;
  }
  // Temporarily expose input value. Use with caution.
  public get readInput() {
    return this._read;
  }

  // write - computed: false, optional: false, required: true
  private _write?: boolean | cdktf.IResolvable; 
  public get write() {
    return this.getBooleanAttribute('write');
  }
  public set write(value: boolean | cdktf.IResolvable) {
    this._write = value;
  }
  // Temporarily expose input value. Use with caution.
  public get writeInput() {
    return this._write;
  }
}
export interface RoleResourceSets {
  /**
  * True if this Role should be able to query and view Resource Set resources.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aembit/aembit/1.25.1/docs/resources/role#read Role#read}
  */
  readonly read: boolean | cdktf.IResolvable;
  /**
  * True if this Role should be able to create and update Resource Set resources.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aembit/aembit/1.25.1/docs/resources/role#write Role#write}
  */
  readonly write: boolean | cdktf.IResolvable;
}

export function roleResourceSetsToTerraform(struct?: RoleResourceSets | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    read: cdktf.booleanToTerraform(struct!.read),
    write: cdktf.booleanToTerraform(struct!.write),
  }
}


export function roleResourceSetsToHclTerraform(struct?: RoleResourceSets | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    read: {
      value: cdktf.booleanToHclTerraform(struct!.read),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    write: {
      value: cdktf.booleanToHclTerraform(struct!.write),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RoleResourceSetsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): RoleResourceSets | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._read !== undefined) {
      hasAnyValues = true;
      internalValueResult.read = this._read;
    }
    if (this._write !== undefined) {
      hasAnyValues = true;
      internalValueResult.write = this._write;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RoleResourceSets | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._read = undefined;
      this._write = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._read = value.read;
      this._write = value.write;
    }
  }

  // read - computed: false, optional: false, required: true
  private _read?: boolean | cdktf.IResolvable; 
  public get read() {
    return this.getBooleanAttribute('read');
  }
  public set read(value: boolean | cdktf.IResolvable) {
    this._read = value;
  }
  // Temporarily expose input value. Use with caution.
  public get readInput() {
    return this._read;
  }

  // write - computed: false, optional: false, required: true
  private _write?: boolean | cdktf.IResolvable; 
  public get write() {
    return this.getBooleanAttribute('write');
  }
  public set write(value: boolean | cdktf.IResolvable) {
    this._write = value;
  }
  // Temporarily expose input value. Use with caution.
  public get writeInput() {
    return this._write;
  }
}
export interface RoleRoles {
  /**
  * True if this Role should be able to query and view Role resources.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aembit/aembit/1.25.1/docs/resources/role#read Role#read}
  */
  readonly read: boolean | cdktf.IResolvable;
  /**
  * True if this Role should be able to create and update Role resources.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aembit/aembit/1.25.1/docs/resources/role#write Role#write}
  */
  readonly write: boolean | cdktf.IResolvable;
}

export function roleRolesToTerraform(struct?: RoleRoles | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    read: cdktf.booleanToTerraform(struct!.read),
    write: cdktf.booleanToTerraform(struct!.write),
  }
}


export function roleRolesToHclTerraform(struct?: RoleRoles | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    read: {
      value: cdktf.booleanToHclTerraform(struct!.read),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    write: {
      value: cdktf.booleanToHclTerraform(struct!.write),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RoleRolesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): RoleRoles | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._read !== undefined) {
      hasAnyValues = true;
      internalValueResult.read = this._read;
    }
    if (this._write !== undefined) {
      hasAnyValues = true;
      internalValueResult.write = this._write;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RoleRoles | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._read = undefined;
      this._write = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._read = value.read;
      this._write = value.write;
    }
  }

  // read - computed: false, optional: false, required: true
  private _read?: boolean | cdktf.IResolvable; 
  public get read() {
    return this.getBooleanAttribute('read');
  }
  public set read(value: boolean | cdktf.IResolvable) {
    this._read = value;
  }
  // Temporarily expose input value. Use with caution.
  public get readInput() {
    return this._read;
  }

  // write - computed: false, optional: false, required: true
  private _write?: boolean | cdktf.IResolvable; 
  public get write() {
    return this.getBooleanAttribute('write');
  }
  public set write(value: boolean | cdktf.IResolvable) {
    this._write = value;
  }
  // Temporarily expose input value. Use with caution.
  public get writeInput() {
    return this._write;
  }
}
export interface RoleRouting {
  /**
  * True if this Role should be able to query and view Routing Configuration resources.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aembit/aembit/1.25.1/docs/resources/role#read Role#read}
  */
  readonly read: boolean | cdktf.IResolvable;
  /**
  * True if this Role should be able to create and update Routing Configuration resources.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aembit/aembit/1.25.1/docs/resources/role#write Role#write}
  */
  readonly write: boolean | cdktf.IResolvable;
}

export function roleRoutingToTerraform(struct?: RoleRouting | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    read: cdktf.booleanToTerraform(struct!.read),
    write: cdktf.booleanToTerraform(struct!.write),
  }
}


export function roleRoutingToHclTerraform(struct?: RoleRouting | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    read: {
      value: cdktf.booleanToHclTerraform(struct!.read),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    write: {
      value: cdktf.booleanToHclTerraform(struct!.write),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RoleRoutingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): RoleRouting | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._read !== undefined) {
      hasAnyValues = true;
      internalValueResult.read = this._read;
    }
    if (this._write !== undefined) {
      hasAnyValues = true;
      internalValueResult.write = this._write;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RoleRouting | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._read = undefined;
      this._write = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._read = value.read;
      this._write = value.write;
    }
  }

  // read - computed: false, optional: false, required: true
  private _read?: boolean | cdktf.IResolvable; 
  public get read() {
    return this.getBooleanAttribute('read');
  }
  public set read(value: boolean | cdktf.IResolvable) {
    this._read = value;
  }
  // Temporarily expose input value. Use with caution.
  public get readInput() {
    return this._read;
  }

  // write - computed: false, optional: false, required: true
  private _write?: boolean | cdktf.IResolvable; 
  public get write() {
    return this.getBooleanAttribute('write');
  }
  public set write(value: boolean | cdktf.IResolvable) {
    this._write = value;
  }
  // Temporarily expose input value. Use with caution.
  public get writeInput() {
    return this._write;
  }
}
export interface RoleServerWorkloads {
  /**
  * True if this Role should be able to query and view Server Workload resources.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aembit/aembit/1.25.1/docs/resources/role#read Role#read}
  */
  readonly read: boolean | cdktf.IResolvable;
  /**
  * True if this Role should be able to create and update Server Workload resources.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aembit/aembit/1.25.1/docs/resources/role#write Role#write}
  */
  readonly write: boolean | cdktf.IResolvable;
}

export function roleServerWorkloadsToTerraform(struct?: RoleServerWorkloads | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    read: cdktf.booleanToTerraform(struct!.read),
    write: cdktf.booleanToTerraform(struct!.write),
  }
}


export function roleServerWorkloadsToHclTerraform(struct?: RoleServerWorkloads | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    read: {
      value: cdktf.booleanToHclTerraform(struct!.read),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    write: {
      value: cdktf.booleanToHclTerraform(struct!.write),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RoleServerWorkloadsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): RoleServerWorkloads | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._read !== undefined) {
      hasAnyValues = true;
      internalValueResult.read = this._read;
    }
    if (this._write !== undefined) {
      hasAnyValues = true;
      internalValueResult.write = this._write;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RoleServerWorkloads | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._read = undefined;
      this._write = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._read = value.read;
      this._write = value.write;
    }
  }

  // read - computed: false, optional: false, required: true
  private _read?: boolean | cdktf.IResolvable; 
  public get read() {
    return this.getBooleanAttribute('read');
  }
  public set read(value: boolean | cdktf.IResolvable) {
    this._read = value;
  }
  // Temporarily expose input value. Use with caution.
  public get readInput() {
    return this._read;
  }

  // write - computed: false, optional: false, required: true
  private _write?: boolean | cdktf.IResolvable; 
  public get write() {
    return this.getBooleanAttribute('write');
  }
  public set write(value: boolean | cdktf.IResolvable) {
    this._write = value;
  }
  // Temporarily expose input value. Use with caution.
  public get writeInput() {
    return this._write;
  }
}
export interface RoleSignonPolicy {
  /**
  * True if this Role should be able to query and view SignOn Policy resources.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aembit/aembit/1.25.1/docs/resources/role#read Role#read}
  */
  readonly read: boolean | cdktf.IResolvable;
  /**
  * True if this Role should be able to create and update SignOn Policy resources.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aembit/aembit/1.25.1/docs/resources/role#write Role#write}
  */
  readonly write: boolean | cdktf.IResolvable;
}

export function roleSignonPolicyToTerraform(struct?: RoleSignonPolicy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    read: cdktf.booleanToTerraform(struct!.read),
    write: cdktf.booleanToTerraform(struct!.write),
  }
}


export function roleSignonPolicyToHclTerraform(struct?: RoleSignonPolicy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    read: {
      value: cdktf.booleanToHclTerraform(struct!.read),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    write: {
      value: cdktf.booleanToHclTerraform(struct!.write),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RoleSignonPolicyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): RoleSignonPolicy | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._read !== undefined) {
      hasAnyValues = true;
      internalValueResult.read = this._read;
    }
    if (this._write !== undefined) {
      hasAnyValues = true;
      internalValueResult.write = this._write;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RoleSignonPolicy | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._read = undefined;
      this._write = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._read = value.read;
      this._write = value.write;
    }
  }

  // read - computed: false, optional: false, required: true
  private _read?: boolean | cdktf.IResolvable; 
  public get read() {
    return this.getBooleanAttribute('read');
  }
  public set read(value: boolean | cdktf.IResolvable) {
    this._read = value;
  }
  // Temporarily expose input value. Use with caution.
  public get readInput() {
    return this._read;
  }

  // write - computed: false, optional: false, required: true
  private _write?: boolean | cdktf.IResolvable; 
  public get write() {
    return this.getBooleanAttribute('write');
  }
  public set write(value: boolean | cdktf.IResolvable) {
    this._write = value;
  }
  // Temporarily expose input value. Use with caution.
  public get writeInput() {
    return this._write;
  }
}
export interface RoleStandaloneCertificateAuthorities {
  /**
  * True if this Role should be able to query and view Standalone Certificate Authority resources.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aembit/aembit/1.25.1/docs/resources/role#read Role#read}
  */
  readonly read: boolean | cdktf.IResolvable;
  /**
  * True if this Role should be able to create and update Standalone Certificate Authority resources.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aembit/aembit/1.25.1/docs/resources/role#write Role#write}
  */
  readonly write: boolean | cdktf.IResolvable;
}

export function roleStandaloneCertificateAuthoritiesToTerraform(struct?: RoleStandaloneCertificateAuthorities | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    read: cdktf.booleanToTerraform(struct!.read),
    write: cdktf.booleanToTerraform(struct!.write),
  }
}


export function roleStandaloneCertificateAuthoritiesToHclTerraform(struct?: RoleStandaloneCertificateAuthorities | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    read: {
      value: cdktf.booleanToHclTerraform(struct!.read),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    write: {
      value: cdktf.booleanToHclTerraform(struct!.write),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RoleStandaloneCertificateAuthoritiesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): RoleStandaloneCertificateAuthorities | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._read !== undefined) {
      hasAnyValues = true;
      internalValueResult.read = this._read;
    }
    if (this._write !== undefined) {
      hasAnyValues = true;
      internalValueResult.write = this._write;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RoleStandaloneCertificateAuthorities | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._read = undefined;
      this._write = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._read = value.read;
      this._write = value.write;
    }
  }

  // read - computed: false, optional: false, required: true
  private _read?: boolean | cdktf.IResolvable; 
  public get read() {
    return this.getBooleanAttribute('read');
  }
  public set read(value: boolean | cdktf.IResolvable) {
    this._read = value;
  }
  // Temporarily expose input value. Use with caution.
  public get readInput() {
    return this._read;
  }

  // write - computed: false, optional: false, required: true
  private _write?: boolean | cdktf.IResolvable; 
  public get write() {
    return this.getBooleanAttribute('write');
  }
  public set write(value: boolean | cdktf.IResolvable) {
    this._write = value;
  }
  // Temporarily expose input value. Use with caution.
  public get writeInput() {
    return this._write;
  }
}
export interface RoleTrustProviders {
  /**
  * True if this Role should be able to query and view Trust Provider resources.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aembit/aembit/1.25.1/docs/resources/role#read Role#read}
  */
  readonly read: boolean | cdktf.IResolvable;
  /**
  * True if this Role should be able to create and update Trust Provider resources.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aembit/aembit/1.25.1/docs/resources/role#write Role#write}
  */
  readonly write: boolean | cdktf.IResolvable;
}

export function roleTrustProvidersToTerraform(struct?: RoleTrustProviders | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    read: cdktf.booleanToTerraform(struct!.read),
    write: cdktf.booleanToTerraform(struct!.write),
  }
}


export function roleTrustProvidersToHclTerraform(struct?: RoleTrustProviders | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    read: {
      value: cdktf.booleanToHclTerraform(struct!.read),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    write: {
      value: cdktf.booleanToHclTerraform(struct!.write),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RoleTrustProvidersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): RoleTrustProviders | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._read !== undefined) {
      hasAnyValues = true;
      internalValueResult.read = this._read;
    }
    if (this._write !== undefined) {
      hasAnyValues = true;
      internalValueResult.write = this._write;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RoleTrustProviders | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._read = undefined;
      this._write = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._read = value.read;
      this._write = value.write;
    }
  }

  // read - computed: false, optional: false, required: true
  private _read?: boolean | cdktf.IResolvable; 
  public get read() {
    return this.getBooleanAttribute('read');
  }
  public set read(value: boolean | cdktf.IResolvable) {
    this._read = value;
  }
  // Temporarily expose input value. Use with caution.
  public get readInput() {
    return this._read;
  }

  // write - computed: false, optional: false, required: true
  private _write?: boolean | cdktf.IResolvable; 
  public get write() {
    return this.getBooleanAttribute('write');
  }
  public set write(value: boolean | cdktf.IResolvable) {
    this._write = value;
  }
  // Temporarily expose input value. Use with caution.
  public get writeInput() {
    return this._write;
  }
}
export interface RoleUsers {
  /**
  * True if this Role should be able to query and view User resources.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aembit/aembit/1.25.1/docs/resources/role#read Role#read}
  */
  readonly read: boolean | cdktf.IResolvable;
  /**
  * True if this Role should be able to create and update User resources.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aembit/aembit/1.25.1/docs/resources/role#write Role#write}
  */
  readonly write: boolean | cdktf.IResolvable;
}

export function roleUsersToTerraform(struct?: RoleUsers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    read: cdktf.booleanToTerraform(struct!.read),
    write: cdktf.booleanToTerraform(struct!.write),
  }
}


export function roleUsersToHclTerraform(struct?: RoleUsers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    read: {
      value: cdktf.booleanToHclTerraform(struct!.read),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    write: {
      value: cdktf.booleanToHclTerraform(struct!.write),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RoleUsersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): RoleUsers | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._read !== undefined) {
      hasAnyValues = true;
      internalValueResult.read = this._read;
    }
    if (this._write !== undefined) {
      hasAnyValues = true;
      internalValueResult.write = this._write;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RoleUsers | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._read = undefined;
      this._write = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._read = value.read;
      this._write = value.write;
    }
  }

  // read - computed: false, optional: false, required: true
  private _read?: boolean | cdktf.IResolvable; 
  public get read() {
    return this.getBooleanAttribute('read');
  }
  public set read(value: boolean | cdktf.IResolvable) {
    this._read = value;
  }
  // Temporarily expose input value. Use with caution.
  public get readInput() {
    return this._read;
  }

  // write - computed: false, optional: false, required: true
  private _write?: boolean | cdktf.IResolvable; 
  public get write() {
    return this.getBooleanAttribute('write');
  }
  public set write(value: boolean | cdktf.IResolvable) {
    this._write = value;
  }
  // Temporarily expose input value. Use with caution.
  public get writeInput() {
    return this._write;
  }
}
export interface RoleWorkloadEvents {
  /**
  * True if this Role should be able to query and view Workload Event data.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aembit/aembit/1.25.1/docs/resources/role#read Role#read}
  */
  readonly read: boolean | cdktf.IResolvable;
}

export function roleWorkloadEventsToTerraform(struct?: RoleWorkloadEvents | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    read: cdktf.booleanToTerraform(struct!.read),
  }
}


export function roleWorkloadEventsToHclTerraform(struct?: RoleWorkloadEvents | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    read: {
      value: cdktf.booleanToHclTerraform(struct!.read),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RoleWorkloadEventsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): RoleWorkloadEvents | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._read !== undefined) {
      hasAnyValues = true;
      internalValueResult.read = this._read;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RoleWorkloadEvents | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._read = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._read = value.read;
    }
  }

  // read - computed: false, optional: false, required: true
  private _read?: boolean | cdktf.IResolvable; 
  public get read() {
    return this.getBooleanAttribute('read');
  }
  public set read(value: boolean | cdktf.IResolvable) {
    this._read = value;
  }
  // Temporarily expose input value. Use with caution.
  public get readInput() {
    return this._read;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/aembit/aembit/1.25.1/docs/resources/role aembit_role}
*/
export class Role extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aembit_role";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Role resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Role to import
  * @param importFromId The id of the existing Role that should be imported. Refer to the {@link https://registry.terraform.io/providers/aembit/aembit/1.25.1/docs/resources/role#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Role to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aembit_role", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aembit/aembit/1.25.1/docs/resources/role aembit_role} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options RoleConfig
  */
  public constructor(scope: Construct, id: string, config: RoleConfig) {
    super(scope, id, {
      terraformResourceType: 'aembit_role',
      terraformGeneratorMetadata: {
        providerName: 'aembit',
        providerVersion: '1.25.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._accessAuthorizationEvents.internalValue = config.accessAuthorizationEvents;
    this._accessConditions.internalValue = config.accessConditions;
    this._accessPolicies.internalValue = config.accessPolicies;
    this._agentControllers.internalValue = config.agentControllers;
    this._auditLogs.internalValue = config.auditLogs;
    this._clientWorkloads.internalValue = config.clientWorkloads;
    this._credentialProviderIntegrations.internalValue = config.credentialProviderIntegrations;
    this._credentialProviders.internalValue = config.credentialProviders;
    this._description = config.description;
    this._discoveryIntegrations.internalValue = config.discoveryIntegrations;
    this._globalPolicyCompliance.internalValue = config.globalPolicyCompliance;
    this._globalPolicyComplianceReport.internalValue = config.globalPolicyComplianceReport;
    this._identityProviders.internalValue = config.identityProviders;
    this._integrations.internalValue = config.integrations;
    this._isActive = config.isActive;
    this._logStreams.internalValue = config.logStreams;
    this._name = config.name;
    this._resourceSets.internalValue = config.resourceSets;
    this._resourceSetsAssignments = config.resourceSetsAssignments;
    this._roles.internalValue = config.roles;
    this._routing.internalValue = config.routing;
    this._serverWorkloads.internalValue = config.serverWorkloads;
    this._signonPolicy.internalValue = config.signonPolicy;
    this._standaloneCertificateAuthorities.internalValue = config.standaloneCertificateAuthorities;
    this._tags = config.tags;
    this._trustProviders.internalValue = config.trustProviders;
    this._users.internalValue = config.users;
    this._workloadEvents.internalValue = config.workloadEvents;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // access_authorization_events - computed: false, optional: false, required: true
  private _accessAuthorizationEvents = new RoleAccessAuthorizationEventsOutputReference(this, "access_authorization_events");
  public get accessAuthorizationEvents() {
    return this._accessAuthorizationEvents;
  }
  public putAccessAuthorizationEvents(value: RoleAccessAuthorizationEvents) {
    this._accessAuthorizationEvents.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get accessAuthorizationEventsInput() {
    return this._accessAuthorizationEvents.internalValue;
  }

  // access_conditions - computed: false, optional: false, required: true
  private _accessConditions = new RoleAccessConditionsOutputReference(this, "access_conditions");
  public get accessConditions() {
    return this._accessConditions;
  }
  public putAccessConditions(value: RoleAccessConditions) {
    this._accessConditions.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get accessConditionsInput() {
    return this._accessConditions.internalValue;
  }

  // access_policies - computed: false, optional: false, required: true
  private _accessPolicies = new RoleAccessPoliciesOutputReference(this, "access_policies");
  public get accessPolicies() {
    return this._accessPolicies;
  }
  public putAccessPolicies(value: RoleAccessPolicies) {
    this._accessPolicies.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get accessPoliciesInput() {
    return this._accessPolicies.internalValue;
  }

  // agent_controllers - computed: false, optional: false, required: true
  private _agentControllers = new RoleAgentControllersOutputReference(this, "agent_controllers");
  public get agentControllers() {
    return this._agentControllers;
  }
  public putAgentControllers(value: RoleAgentControllers) {
    this._agentControllers.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get agentControllersInput() {
    return this._agentControllers.internalValue;
  }

  // audit_logs - computed: false, optional: false, required: true
  private _auditLogs = new RoleAuditLogsOutputReference(this, "audit_logs");
  public get auditLogs() {
    return this._auditLogs;
  }
  public putAuditLogs(value: RoleAuditLogs) {
    this._auditLogs.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get auditLogsInput() {
    return this._auditLogs.internalValue;
  }

  // client_workloads - computed: false, optional: false, required: true
  private _clientWorkloads = new RoleClientWorkloadsOutputReference(this, "client_workloads");
  public get clientWorkloads() {
    return this._clientWorkloads;
  }
  public putClientWorkloads(value: RoleClientWorkloads) {
    this._clientWorkloads.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clientWorkloadsInput() {
    return this._clientWorkloads.internalValue;
  }

  // credential_provider_integrations - computed: false, optional: false, required: true
  private _credentialProviderIntegrations = new RoleCredentialProviderIntegrationsOutputReference(this, "credential_provider_integrations");
  public get credentialProviderIntegrations() {
    return this._credentialProviderIntegrations;
  }
  public putCredentialProviderIntegrations(value: RoleCredentialProviderIntegrations) {
    this._credentialProviderIntegrations.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get credentialProviderIntegrationsInput() {
    return this._credentialProviderIntegrations.internalValue;
  }

  // credential_providers - computed: false, optional: false, required: true
  private _credentialProviders = new RoleCredentialProvidersOutputReference(this, "credential_providers");
  public get credentialProviders() {
    return this._credentialProviders;
  }
  public putCredentialProviders(value: RoleCredentialProviders) {
    this._credentialProviders.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get credentialProvidersInput() {
    return this._credentialProviders.internalValue;
  }

  // description - computed: true, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // discovery_integrations - computed: false, optional: false, required: true
  private _discoveryIntegrations = new RoleDiscoveryIntegrationsOutputReference(this, "discovery_integrations");
  public get discoveryIntegrations() {
    return this._discoveryIntegrations;
  }
  public putDiscoveryIntegrations(value: RoleDiscoveryIntegrations) {
    this._discoveryIntegrations.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get discoveryIntegrationsInput() {
    return this._discoveryIntegrations.internalValue;
  }

  // global_policy_compliance - computed: false, optional: false, required: true
  private _globalPolicyCompliance = new RoleGlobalPolicyComplianceOutputReference(this, "global_policy_compliance");
  public get globalPolicyCompliance() {
    return this._globalPolicyCompliance;
  }
  public putGlobalPolicyCompliance(value: RoleGlobalPolicyCompliance) {
    this._globalPolicyCompliance.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get globalPolicyComplianceInput() {
    return this._globalPolicyCompliance.internalValue;
  }

  // global_policy_compliance_report - computed: false, optional: false, required: true
  private _globalPolicyComplianceReport = new RoleGlobalPolicyComplianceReportOutputReference(this, "global_policy_compliance_report");
  public get globalPolicyComplianceReport() {
    return this._globalPolicyComplianceReport;
  }
  public putGlobalPolicyComplianceReport(value: RoleGlobalPolicyComplianceReport) {
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

  // identity_providers - computed: false, optional: false, required: true
  private _identityProviders = new RoleIdentityProvidersOutputReference(this, "identity_providers");
  public get identityProviders() {
    return this._identityProviders;
  }
  public putIdentityProviders(value: RoleIdentityProviders) {
    this._identityProviders.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get identityProvidersInput() {
    return this._identityProviders.internalValue;
  }

  // integrations - computed: false, optional: false, required: true
  private _integrations = new RoleIntegrationsOutputReference(this, "integrations");
  public get integrations() {
    return this._integrations;
  }
  public putIntegrations(value: RoleIntegrations) {
    this._integrations.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get integrationsInput() {
    return this._integrations.internalValue;
  }

  // is_active - computed: true, optional: true, required: false
  private _isActive?: boolean | cdktf.IResolvable; 
  public get isActive() {
    return this.getBooleanAttribute('is_active');
  }
  public set isActive(value: boolean | cdktf.IResolvable) {
    this._isActive = value;
  }
  public resetIsActive() {
    this._isActive = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isActiveInput() {
    return this._isActive;
  }

  // log_streams - computed: false, optional: false, required: true
  private _logStreams = new RoleLogStreamsOutputReference(this, "log_streams");
  public get logStreams() {
    return this._logStreams;
  }
  public putLogStreams(value: RoleLogStreams) {
    this._logStreams.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get logStreamsInput() {
    return this._logStreams.internalValue;
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // resource_sets - computed: false, optional: false, required: true
  private _resourceSets = new RoleResourceSetsOutputReference(this, "resource_sets");
  public get resourceSets() {
    return this._resourceSets;
  }
  public putResourceSets(value: RoleResourceSets) {
    this._resourceSets.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceSetsInput() {
    return this._resourceSets.internalValue;
  }

  // resource_sets_assignments - computed: true, optional: true, required: false
  private _resourceSetsAssignments?: string[]; 
  public get resourceSetsAssignments() {
    return cdktf.Fn.tolist(this.getListAttribute('resource_sets_assignments'));
  }
  public set resourceSetsAssignments(value: string[]) {
    this._resourceSetsAssignments = value;
  }
  public resetResourceSetsAssignments() {
    this._resourceSetsAssignments = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceSetsAssignmentsInput() {
    return this._resourceSetsAssignments;
  }

  // roles - computed: false, optional: false, required: true
  private _roles = new RoleRolesOutputReference(this, "roles");
  public get roles() {
    return this._roles;
  }
  public putRoles(value: RoleRoles) {
    this._roles.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get rolesInput() {
    return this._roles.internalValue;
  }

  // routing - computed: false, optional: false, required: true
  private _routing = new RoleRoutingOutputReference(this, "routing");
  public get routing() {
    return this._routing;
  }
  public putRouting(value: RoleRouting) {
    this._routing.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get routingInput() {
    return this._routing.internalValue;
  }

  // server_workloads - computed: false, optional: false, required: true
  private _serverWorkloads = new RoleServerWorkloadsOutputReference(this, "server_workloads");
  public get serverWorkloads() {
    return this._serverWorkloads;
  }
  public putServerWorkloads(value: RoleServerWorkloads) {
    this._serverWorkloads.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serverWorkloadsInput() {
    return this._serverWorkloads.internalValue;
  }

  // signon_policy - computed: false, optional: false, required: true
  private _signonPolicy = new RoleSignonPolicyOutputReference(this, "signon_policy");
  public get signonPolicy() {
    return this._signonPolicy;
  }
  public putSignonPolicy(value: RoleSignonPolicy) {
    this._signonPolicy.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get signonPolicyInput() {
    return this._signonPolicy.internalValue;
  }

  // standalone_certificate_authorities - computed: false, optional: false, required: true
  private _standaloneCertificateAuthorities = new RoleStandaloneCertificateAuthoritiesOutputReference(this, "standalone_certificate_authorities");
  public get standaloneCertificateAuthorities() {
    return this._standaloneCertificateAuthorities;
  }
  public putStandaloneCertificateAuthorities(value: RoleStandaloneCertificateAuthorities) {
    this._standaloneCertificateAuthorities.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get standaloneCertificateAuthoritiesInput() {
    return this._standaloneCertificateAuthorities.internalValue;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string }; 
  public get tags() {
    return this.getStringMapAttribute('tags');
  }
  public set tags(value: { [key: string]: string }) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // trust_providers - computed: false, optional: false, required: true
  private _trustProviders = new RoleTrustProvidersOutputReference(this, "trust_providers");
  public get trustProviders() {
    return this._trustProviders;
  }
  public putTrustProviders(value: RoleTrustProviders) {
    this._trustProviders.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get trustProvidersInput() {
    return this._trustProviders.internalValue;
  }

  // users - computed: false, optional: false, required: true
  private _users = new RoleUsersOutputReference(this, "users");
  public get users() {
    return this._users;
  }
  public putUsers(value: RoleUsers) {
    this._users.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get usersInput() {
    return this._users.internalValue;
  }

  // workload_events - computed: false, optional: false, required: true
  private _workloadEvents = new RoleWorkloadEventsOutputReference(this, "workload_events");
  public get workloadEvents() {
    return this._workloadEvents;
  }
  public putWorkloadEvents(value: RoleWorkloadEvents) {
    this._workloadEvents.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get workloadEventsInput() {
    return this._workloadEvents.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      access_authorization_events: roleAccessAuthorizationEventsToTerraform(this._accessAuthorizationEvents.internalValue),
      access_conditions: roleAccessConditionsToTerraform(this._accessConditions.internalValue),
      access_policies: roleAccessPoliciesToTerraform(this._accessPolicies.internalValue),
      agent_controllers: roleAgentControllersToTerraform(this._agentControllers.internalValue),
      audit_logs: roleAuditLogsToTerraform(this._auditLogs.internalValue),
      client_workloads: roleClientWorkloadsToTerraform(this._clientWorkloads.internalValue),
      credential_provider_integrations: roleCredentialProviderIntegrationsToTerraform(this._credentialProviderIntegrations.internalValue),
      credential_providers: roleCredentialProvidersToTerraform(this._credentialProviders.internalValue),
      description: cdktf.stringToTerraform(this._description),
      discovery_integrations: roleDiscoveryIntegrationsToTerraform(this._discoveryIntegrations.internalValue),
      global_policy_compliance: roleGlobalPolicyComplianceToTerraform(this._globalPolicyCompliance.internalValue),
      global_policy_compliance_report: roleGlobalPolicyComplianceReportToTerraform(this._globalPolicyComplianceReport.internalValue),
      identity_providers: roleIdentityProvidersToTerraform(this._identityProviders.internalValue),
      integrations: roleIntegrationsToTerraform(this._integrations.internalValue),
      is_active: cdktf.booleanToTerraform(this._isActive),
      log_streams: roleLogStreamsToTerraform(this._logStreams.internalValue),
      name: cdktf.stringToTerraform(this._name),
      resource_sets: roleResourceSetsToTerraform(this._resourceSets.internalValue),
      resource_sets_assignments: cdktf.listMapper(cdktf.stringToTerraform, false)(this._resourceSetsAssignments),
      roles: roleRolesToTerraform(this._roles.internalValue),
      routing: roleRoutingToTerraform(this._routing.internalValue),
      server_workloads: roleServerWorkloadsToTerraform(this._serverWorkloads.internalValue),
      signon_policy: roleSignonPolicyToTerraform(this._signonPolicy.internalValue),
      standalone_certificate_authorities: roleStandaloneCertificateAuthoritiesToTerraform(this._standaloneCertificateAuthorities.internalValue),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      trust_providers: roleTrustProvidersToTerraform(this._trustProviders.internalValue),
      users: roleUsersToTerraform(this._users.internalValue),
      workload_events: roleWorkloadEventsToTerraform(this._workloadEvents.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      access_authorization_events: {
        value: roleAccessAuthorizationEventsToHclTerraform(this._accessAuthorizationEvents.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "RoleAccessAuthorizationEvents",
      },
      access_conditions: {
        value: roleAccessConditionsToHclTerraform(this._accessConditions.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "RoleAccessConditions",
      },
      access_policies: {
        value: roleAccessPoliciesToHclTerraform(this._accessPolicies.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "RoleAccessPolicies",
      },
      agent_controllers: {
        value: roleAgentControllersToHclTerraform(this._agentControllers.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "RoleAgentControllers",
      },
      audit_logs: {
        value: roleAuditLogsToHclTerraform(this._auditLogs.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "RoleAuditLogs",
      },
      client_workloads: {
        value: roleClientWorkloadsToHclTerraform(this._clientWorkloads.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "RoleClientWorkloads",
      },
      credential_provider_integrations: {
        value: roleCredentialProviderIntegrationsToHclTerraform(this._credentialProviderIntegrations.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "RoleCredentialProviderIntegrations",
      },
      credential_providers: {
        value: roleCredentialProvidersToHclTerraform(this._credentialProviders.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "RoleCredentialProviders",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      discovery_integrations: {
        value: roleDiscoveryIntegrationsToHclTerraform(this._discoveryIntegrations.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "RoleDiscoveryIntegrations",
      },
      global_policy_compliance: {
        value: roleGlobalPolicyComplianceToHclTerraform(this._globalPolicyCompliance.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "RoleGlobalPolicyCompliance",
      },
      global_policy_compliance_report: {
        value: roleGlobalPolicyComplianceReportToHclTerraform(this._globalPolicyComplianceReport.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "RoleGlobalPolicyComplianceReport",
      },
      identity_providers: {
        value: roleIdentityProvidersToHclTerraform(this._identityProviders.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "RoleIdentityProviders",
      },
      integrations: {
        value: roleIntegrationsToHclTerraform(this._integrations.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "RoleIntegrations",
      },
      is_active: {
        value: cdktf.booleanToHclTerraform(this._isActive),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      log_streams: {
        value: roleLogStreamsToHclTerraform(this._logStreams.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "RoleLogStreams",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      resource_sets: {
        value: roleResourceSetsToHclTerraform(this._resourceSets.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "RoleResourceSets",
      },
      resource_sets_assignments: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._resourceSetsAssignments),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      roles: {
        value: roleRolesToHclTerraform(this._roles.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "RoleRoles",
      },
      routing: {
        value: roleRoutingToHclTerraform(this._routing.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "RoleRouting",
      },
      server_workloads: {
        value: roleServerWorkloadsToHclTerraform(this._serverWorkloads.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "RoleServerWorkloads",
      },
      signon_policy: {
        value: roleSignonPolicyToHclTerraform(this._signonPolicy.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "RoleSignonPolicy",
      },
      standalone_certificate_authorities: {
        value: roleStandaloneCertificateAuthoritiesToHclTerraform(this._standaloneCertificateAuthorities.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "RoleStandaloneCertificateAuthorities",
      },
      tags: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._tags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      trust_providers: {
        value: roleTrustProvidersToHclTerraform(this._trustProviders.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "RoleTrustProviders",
      },
      users: {
        value: roleUsersToHclTerraform(this._users.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "RoleUsers",
      },
      workload_events: {
        value: roleWorkloadEventsToHclTerraform(this._workloadEvents.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "RoleWorkloadEvents",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
