// https://registry.terraform.io/providers/cloudera/cdp/0.10.8/docs/data-sources/environments_config
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataCdpEnvironmentsConfigConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudera/cdp/0.10.8/docs/data-sources/environments_config#crn DataCdpEnvironmentsConfig#crn}
  */
  readonly crn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudera/cdp/0.10.8/docs/data-sources/environments_config#name DataCdpEnvironmentsConfig#name}
  */
  readonly name?: string;
}
export interface DataCdpEnvironmentsConfigAwsAuthentication {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudera/cdp/0.10.8/docs/data-sources/environments_config#public_key DataCdpEnvironmentsConfig#public_key}
  */
  readonly publicKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudera/cdp/0.10.8/docs/data-sources/environments_config#public_key_id DataCdpEnvironmentsConfig#public_key_id}
  */
  readonly publicKeyId?: string;
}

export function dataCdpEnvironmentsConfigAwsAuthenticationToTerraform(struct?: DataCdpEnvironmentsConfigAwsAuthentication): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    public_key: cdktf.stringToTerraform(struct!.publicKey),
    public_key_id: cdktf.stringToTerraform(struct!.publicKeyId),
  }
}


export function dataCdpEnvironmentsConfigAwsAuthenticationToHclTerraform(struct?: DataCdpEnvironmentsConfigAwsAuthentication): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    public_key: {
      value: cdktf.stringToHclTerraform(struct!.publicKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    public_key_id: {
      value: cdktf.stringToHclTerraform(struct!.publicKeyId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataCdpEnvironmentsConfigAwsAuthenticationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCdpEnvironmentsConfigAwsAuthentication | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._publicKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.publicKey = this._publicKey;
    }
    if (this._publicKeyId !== undefined) {
      hasAnyValues = true;
      internalValueResult.publicKeyId = this._publicKeyId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCdpEnvironmentsConfigAwsAuthentication | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._publicKey = undefined;
      this._publicKeyId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._publicKey = value.publicKey;
      this._publicKeyId = value.publicKeyId;
    }
  }

  // public_key - computed: true, optional: true, required: false
  private _publicKey?: string; 
  public get publicKey() {
    return this.getStringAttribute('public_key');
  }
  public set publicKey(value: string) {
    this._publicKey = value;
  }
  public resetPublicKey() {
    this._publicKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get publicKeyInput() {
    return this._publicKey;
  }

  // public_key_id - computed: true, optional: true, required: false
  private _publicKeyId?: string; 
  public get publicKeyId() {
    return this.getStringAttribute('public_key_id');
  }
  public set publicKeyId(value: string) {
    this._publicKeyId = value;
  }
  public resetPublicKeyId() {
    this._publicKeyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get publicKeyIdInput() {
    return this._publicKeyId;
  }
}
export interface DataCdpEnvironmentsConfigAwsFreeipaInstances {
}

export function dataCdpEnvironmentsConfigAwsFreeipaInstancesToTerraform(struct?: DataCdpEnvironmentsConfigAwsFreeipaInstances): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCdpEnvironmentsConfigAwsFreeipaInstancesToHclTerraform(struct?: DataCdpEnvironmentsConfigAwsFreeipaInstances): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCdpEnvironmentsConfigAwsFreeipaInstancesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataCdpEnvironmentsConfigAwsFreeipaInstances | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCdpEnvironmentsConfigAwsFreeipaInstances | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // availability_zone - computed: true, optional: false, required: false
  public get availabilityZone() {
    return this.getStringAttribute('availability_zone');
  }

  // discovery_fqdn - computed: true, optional: false, required: false
  public get discoveryFqdn() {
    return this.getStringAttribute('discovery_fqdn');
  }

  // instance_group - computed: true, optional: false, required: false
  public get instanceGroup() {
    return this.getStringAttribute('instance_group');
  }

  // instance_id - computed: true, optional: false, required: false
  public get instanceId() {
    return this.getStringAttribute('instance_id');
  }

  // instance_status - computed: true, optional: false, required: false
  public get instanceStatus() {
    return this.getStringAttribute('instance_status');
  }

  // instance_status_reason - computed: true, optional: false, required: false
  public get instanceStatusReason() {
    return this.getStringAttribute('instance_status_reason');
  }

  // instance_type - computed: true, optional: false, required: false
  public get instanceType() {
    return this.getStringAttribute('instance_type');
  }

  // instance_vm_type - computed: true, optional: false, required: false
  public get instanceVmType() {
    return this.getStringAttribute('instance_vm_type');
  }

  // life_cycle - computed: true, optional: false, required: false
  public get lifeCycle() {
    return this.getStringAttribute('life_cycle');
  }

  // private_ip - computed: true, optional: false, required: false
  public get privateIp() {
    return this.getStringAttribute('private_ip');
  }

  // public_ip - computed: true, optional: false, required: false
  public get publicIp() {
    return this.getStringAttribute('public_ip');
  }

  // ssh_port - computed: true, optional: false, required: false
  public get sshPort() {
    return this.getNumberAttribute('ssh_port');
  }

  // subnet_id - computed: true, optional: false, required: false
  public get subnetId() {
    return this.getStringAttribute('subnet_id');
  }
}

export class DataCdpEnvironmentsConfigAwsFreeipaInstancesList extends cdktf.ComplexList {

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
  public get(index: number): DataCdpEnvironmentsConfigAwsFreeipaInstancesOutputReference {
    return new DataCdpEnvironmentsConfigAwsFreeipaInstancesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataCdpEnvironmentsConfigAwsFreeipa {
}

export function dataCdpEnvironmentsConfigAwsFreeipaToTerraform(struct?: DataCdpEnvironmentsConfigAwsFreeipa): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCdpEnvironmentsConfigAwsFreeipaToHclTerraform(struct?: DataCdpEnvironmentsConfigAwsFreeipa): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCdpEnvironmentsConfigAwsFreeipaOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCdpEnvironmentsConfigAwsFreeipa | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCdpEnvironmentsConfigAwsFreeipa | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // catalog - computed: true, optional: false, required: false
  public get catalog() {
    return this.getStringAttribute('catalog');
  }

  // image_id - computed: true, optional: false, required: false
  public get imageId() {
    return this.getStringAttribute('image_id');
  }

  // instance_count_by_group - computed: true, optional: false, required: false
  public get instanceCountByGroup() {
    return this.getNumberAttribute('instance_count_by_group');
  }

  // instance_type - computed: true, optional: false, required: false
  public get instanceType() {
    return this.getStringAttribute('instance_type');
  }

  // instances - computed: true, optional: false, required: false
  private _instances = new DataCdpEnvironmentsConfigAwsFreeipaInstancesList(this, "instances", true);
  public get instances() {
    return this._instances;
  }

  // multi_az - computed: true, optional: false, required: false
  public get multiAz() {
    return this.getBooleanAttribute('multi_az');
  }

  // os - computed: true, optional: false, required: false
  public get os() {
    return this.getStringAttribute('os');
  }

  // recipes - computed: true, optional: false, required: false
  public get recipes() {
    return cdktf.Fn.tolist(this.getListAttribute('recipes'));
  }
}
export interface DataCdpEnvironmentsConfigAwsLogStorage {
}

export function dataCdpEnvironmentsConfigAwsLogStorageToTerraform(struct?: DataCdpEnvironmentsConfigAwsLogStorage): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCdpEnvironmentsConfigAwsLogStorageToHclTerraform(struct?: DataCdpEnvironmentsConfigAwsLogStorage): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCdpEnvironmentsConfigAwsLogStorageOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCdpEnvironmentsConfigAwsLogStorage | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCdpEnvironmentsConfigAwsLogStorage | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // backup_storage_location_base - computed: true, optional: false, required: false
  public get backupStorageLocationBase() {
    return this.getStringAttribute('backup_storage_location_base');
  }

  // instance_profile - computed: true, optional: false, required: false
  public get instanceProfile() {
    return this.getStringAttribute('instance_profile');
  }

  // storage_location_base - computed: true, optional: false, required: false
  public get storageLocationBase() {
    return this.getStringAttribute('storage_location_base');
  }
}
export interface DataCdpEnvironmentsConfigAwsPollingOptions {
}

export function dataCdpEnvironmentsConfigAwsPollingOptionsToTerraform(struct?: DataCdpEnvironmentsConfigAwsPollingOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCdpEnvironmentsConfigAwsPollingOptionsToHclTerraform(struct?: DataCdpEnvironmentsConfigAwsPollingOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCdpEnvironmentsConfigAwsPollingOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCdpEnvironmentsConfigAwsPollingOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCdpEnvironmentsConfigAwsPollingOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // async - computed: true, optional: false, required: false
  public get async() {
    return this.getBooleanAttribute('async');
  }

  // call_failure_threshold - computed: true, optional: false, required: false
  public get callFailureThreshold() {
    return this.getNumberAttribute('call_failure_threshold');
  }

  // polling_timeout - computed: true, optional: false, required: false
  public get pollingTimeout() {
    return this.getNumberAttribute('polling_timeout');
  }
}
export interface DataCdpEnvironmentsConfigAwsSecurityAccess {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudera/cdp/0.10.8/docs/data-sources/environments_config#default_security_group_ids DataCdpEnvironmentsConfig#default_security_group_ids}
  */
  readonly defaultSecurityGroupIds?: string[];
}

export function dataCdpEnvironmentsConfigAwsSecurityAccessToTerraform(struct?: DataCdpEnvironmentsConfigAwsSecurityAccess): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default_security_group_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.defaultSecurityGroupIds),
  }
}


export function dataCdpEnvironmentsConfigAwsSecurityAccessToHclTerraform(struct?: DataCdpEnvironmentsConfigAwsSecurityAccess): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    default_security_group_ids: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.defaultSecurityGroupIds),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataCdpEnvironmentsConfigAwsSecurityAccessOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCdpEnvironmentsConfigAwsSecurityAccess | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._defaultSecurityGroupIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultSecurityGroupIds = this._defaultSecurityGroupIds;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCdpEnvironmentsConfigAwsSecurityAccess | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._defaultSecurityGroupIds = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._defaultSecurityGroupIds = value.defaultSecurityGroupIds;
    }
  }

  // cidr - computed: true, optional: false, required: false
  public get cidr() {
    return this.getStringAttribute('cidr');
  }

  // default_security_group_id - computed: true, optional: false, required: false
  public get defaultSecurityGroupId() {
    return this.getStringAttribute('default_security_group_id');
  }

  // default_security_group_ids - computed: true, optional: true, required: false
  private _defaultSecurityGroupIds?: string[]; 
  public get defaultSecurityGroupIds() {
    return cdktf.Fn.tolist(this.getListAttribute('default_security_group_ids'));
  }
  public set defaultSecurityGroupIds(value: string[]) {
    this._defaultSecurityGroupIds = value;
  }
  public resetDefaultSecurityGroupIds() {
    this._defaultSecurityGroupIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultSecurityGroupIdsInput() {
    return this._defaultSecurityGroupIds;
  }

  // security_group_id_for_knox - computed: true, optional: false, required: false
  public get securityGroupIdForKnox() {
    return this.getStringAttribute('security_group_id_for_knox');
  }

  // security_group_ids_for_knox - computed: true, optional: false, required: false
  public get securityGroupIdsForKnox() {
    return cdktf.Fn.tolist(this.getListAttribute('security_group_ids_for_knox'));
  }
}
export interface DataCdpEnvironmentsConfigAws {
}

export function dataCdpEnvironmentsConfigAwsToTerraform(struct?: DataCdpEnvironmentsConfigAws): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCdpEnvironmentsConfigAwsToHclTerraform(struct?: DataCdpEnvironmentsConfigAws): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCdpEnvironmentsConfigAwsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCdpEnvironmentsConfigAws | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCdpEnvironmentsConfigAws | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // authentication - computed: true, optional: false, required: false
  private _authentication = new DataCdpEnvironmentsConfigAwsAuthenticationOutputReference(this, "authentication");
  public get authentication() {
    return this._authentication;
  }

  // cascading_delete - computed: true, optional: false, required: false
  public get cascadingDelete() {
    return this.getBooleanAttribute('cascading_delete');
  }

  // create_private_subnets - computed: true, optional: false, required: false
  public get createPrivateSubnets() {
    return this.getBooleanAttribute('create_private_subnets');
  }

  // create_service_endpoints - computed: true, optional: false, required: false
  public get createServiceEndpoints() {
    return this.getBooleanAttribute('create_service_endpoints');
  }

  // credential_name - computed: true, optional: false, required: false
  public get credentialName() {
    return this.getStringAttribute('credential_name');
  }

  // crn - computed: true, optional: false, required: false
  public get crn() {
    return this.getStringAttribute('crn');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // enable_tunnel - computed: true, optional: false, required: false
  public get enableTunnel() {
    return this.getBooleanAttribute('enable_tunnel');
  }

  // encryption_key_arn - computed: true, optional: false, required: false
  public get encryptionKeyArn() {
    return this.getStringAttribute('encryption_key_arn');
  }

  // endpoint_access_gateway_scheme - computed: true, optional: false, required: false
  public get endpointAccessGatewayScheme() {
    return this.getStringAttribute('endpoint_access_gateway_scheme');
  }

  // endpoint_access_gateway_subnet_ids - computed: true, optional: false, required: false
  public get endpointAccessGatewaySubnetIds() {
    return cdktf.Fn.tolist(this.getListAttribute('endpoint_access_gateway_subnet_ids'));
  }

  // environment_name - computed: true, optional: false, required: false
  public get environmentName() {
    return this.getStringAttribute('environment_name');
  }

  // freeipa - computed: true, optional: false, required: false
  private _freeipa = new DataCdpEnvironmentsConfigAwsFreeipaOutputReference(this, "freeipa");
  public get freeipa() {
    return this._freeipa;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // log_storage - computed: true, optional: false, required: false
  private _logStorage = new DataCdpEnvironmentsConfigAwsLogStorageOutputReference(this, "log_storage");
  public get logStorage() {
    return this._logStorage;
  }

  // network_cidr - computed: true, optional: false, required: false
  public get networkCidr() {
    return this.getStringAttribute('network_cidr');
  }

  // polling_options - computed: true, optional: false, required: false
  private _pollingOptions = new DataCdpEnvironmentsConfigAwsPollingOptionsOutputReference(this, "polling_options");
  public get pollingOptions() {
    return this._pollingOptions;
  }

  // proxy_config_name - computed: true, optional: false, required: false
  public get proxyConfigName() {
    return this.getStringAttribute('proxy_config_name');
  }

  // region - computed: true, optional: false, required: false
  public get region() {
    return this.getStringAttribute('region');
  }

  // report_deployment_logs - computed: true, optional: false, required: false
  public get reportDeploymentLogs() {
    return this.getBooleanAttribute('report_deployment_logs');
  }

  // s3_guard_table_name - computed: true, optional: false, required: false
  public get s3GuardTableName() {
    return this.getStringAttribute('s3_guard_table_name');
  }

  // security_access - computed: true, optional: false, required: false
  private _securityAccess = new DataCdpEnvironmentsConfigAwsSecurityAccessOutputReference(this, "security_access");
  public get securityAccess() {
    return this._securityAccess;
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // status_reason - computed: true, optional: false, required: false
  public get statusReason() {
    return this.getStringAttribute('status_reason');
  }

  // subnet_ids - computed: true, optional: false, required: false
  public get subnetIds() {
    return cdktf.Fn.tolist(this.getListAttribute('subnet_ids'));
  }

  // tags - computed: true, optional: false, required: false
  private _tags = new cdktf.StringMap(this, "tags");
  public get tags() {
    return this._tags;
  }

  // tunnel_type - computed: true, optional: false, required: false
  public get tunnelType() {
    return this.getStringAttribute('tunnel_type');
  }

  // vpc_id - computed: true, optional: false, required: false
  public get vpcId() {
    return this.getStringAttribute('vpc_id');
  }

  // workload_analytics - computed: true, optional: false, required: false
  public get workloadAnalytics() {
    return this.getBooleanAttribute('workload_analytics');
  }
}
export interface DataCdpEnvironmentsConfigAzureExistingNetworkParams {
}

export function dataCdpEnvironmentsConfigAzureExistingNetworkParamsToTerraform(struct?: DataCdpEnvironmentsConfigAzureExistingNetworkParams): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCdpEnvironmentsConfigAzureExistingNetworkParamsToHclTerraform(struct?: DataCdpEnvironmentsConfigAzureExistingNetworkParams): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCdpEnvironmentsConfigAzureExistingNetworkParamsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCdpEnvironmentsConfigAzureExistingNetworkParams | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCdpEnvironmentsConfigAzureExistingNetworkParams | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // aks_private_dns_zone_id - computed: true, optional: false, required: false
  public get aksPrivateDnsZoneId() {
    return this.getStringAttribute('aks_private_dns_zone_id');
  }

  // database_private_dns_zone_id - computed: true, optional: false, required: false
  public get databasePrivateDnsZoneId() {
    return this.getStringAttribute('database_private_dns_zone_id');
  }

  // flexible_server_subnet_ids - computed: true, optional: false, required: false
  public get flexibleServerSubnetIds() {
    return cdktf.Fn.tolist(this.getListAttribute('flexible_server_subnet_ids'));
  }

  // network_id - computed: true, optional: false, required: false
  public get networkId() {
    return this.getStringAttribute('network_id');
  }

  // resource_group_name - computed: true, optional: false, required: false
  public get resourceGroupName() {
    return this.getStringAttribute('resource_group_name');
  }

  // subnet_ids - computed: true, optional: false, required: false
  public get subnetIds() {
    return cdktf.Fn.tolist(this.getListAttribute('subnet_ids'));
  }
}
export interface DataCdpEnvironmentsConfigAzureFreeipaInstances {
}

export function dataCdpEnvironmentsConfigAzureFreeipaInstancesToTerraform(struct?: DataCdpEnvironmentsConfigAzureFreeipaInstances): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCdpEnvironmentsConfigAzureFreeipaInstancesToHclTerraform(struct?: DataCdpEnvironmentsConfigAzureFreeipaInstances): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCdpEnvironmentsConfigAzureFreeipaInstancesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataCdpEnvironmentsConfigAzureFreeipaInstances | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCdpEnvironmentsConfigAzureFreeipaInstances | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // availability_zone - computed: true, optional: false, required: false
  public get availabilityZone() {
    return this.getStringAttribute('availability_zone');
  }

  // discovery_fqdn - computed: true, optional: false, required: false
  public get discoveryFqdn() {
    return this.getStringAttribute('discovery_fqdn');
  }

  // instance_group - computed: true, optional: false, required: false
  public get instanceGroup() {
    return this.getStringAttribute('instance_group');
  }

  // instance_id - computed: true, optional: false, required: false
  public get instanceId() {
    return this.getStringAttribute('instance_id');
  }

  // instance_status - computed: true, optional: false, required: false
  public get instanceStatus() {
    return this.getStringAttribute('instance_status');
  }

  // instance_status_reason - computed: true, optional: false, required: false
  public get instanceStatusReason() {
    return this.getStringAttribute('instance_status_reason');
  }

  // instance_type - computed: true, optional: false, required: false
  public get instanceType() {
    return this.getStringAttribute('instance_type');
  }

  // instance_vm_type - computed: true, optional: false, required: false
  public get instanceVmType() {
    return this.getStringAttribute('instance_vm_type');
  }

  // life_cycle - computed: true, optional: false, required: false
  public get lifeCycle() {
    return this.getStringAttribute('life_cycle');
  }

  // private_ip - computed: true, optional: false, required: false
  public get privateIp() {
    return this.getStringAttribute('private_ip');
  }

  // public_ip - computed: true, optional: false, required: false
  public get publicIp() {
    return this.getStringAttribute('public_ip');
  }

  // ssh_port - computed: true, optional: false, required: false
  public get sshPort() {
    return this.getNumberAttribute('ssh_port');
  }

  // subnet_id - computed: true, optional: false, required: false
  public get subnetId() {
    return this.getStringAttribute('subnet_id');
  }
}

export class DataCdpEnvironmentsConfigAzureFreeipaInstancesList extends cdktf.ComplexList {

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
  public get(index: number): DataCdpEnvironmentsConfigAzureFreeipaInstancesOutputReference {
    return new DataCdpEnvironmentsConfigAzureFreeipaInstancesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataCdpEnvironmentsConfigAzureFreeipa {
}

export function dataCdpEnvironmentsConfigAzureFreeipaToTerraform(struct?: DataCdpEnvironmentsConfigAzureFreeipa): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCdpEnvironmentsConfigAzureFreeipaToHclTerraform(struct?: DataCdpEnvironmentsConfigAzureFreeipa): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCdpEnvironmentsConfigAzureFreeipaOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCdpEnvironmentsConfigAzureFreeipa | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCdpEnvironmentsConfigAzureFreeipa | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // catalog - computed: true, optional: false, required: false
  public get catalog() {
    return this.getStringAttribute('catalog');
  }

  // image_id - computed: true, optional: false, required: false
  public get imageId() {
    return this.getStringAttribute('image_id');
  }

  // instance_count_by_group - computed: true, optional: false, required: false
  public get instanceCountByGroup() {
    return this.getNumberAttribute('instance_count_by_group');
  }

  // instance_type - computed: true, optional: false, required: false
  public get instanceType() {
    return this.getStringAttribute('instance_type');
  }

  // instances - computed: true, optional: false, required: false
  private _instances = new DataCdpEnvironmentsConfigAzureFreeipaInstancesList(this, "instances", true);
  public get instances() {
    return this._instances;
  }

  // multi_az - computed: true, optional: false, required: false
  public get multiAz() {
    return this.getBooleanAttribute('multi_az');
  }

  // os - computed: true, optional: false, required: false
  public get os() {
    return this.getStringAttribute('os');
  }

  // recipes - computed: true, optional: false, required: false
  public get recipes() {
    return cdktf.Fn.tolist(this.getListAttribute('recipes'));
  }
}
export interface DataCdpEnvironmentsConfigAzureLogStorage {
}

export function dataCdpEnvironmentsConfigAzureLogStorageToTerraform(struct?: DataCdpEnvironmentsConfigAzureLogStorage): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCdpEnvironmentsConfigAzureLogStorageToHclTerraform(struct?: DataCdpEnvironmentsConfigAzureLogStorage): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCdpEnvironmentsConfigAzureLogStorageOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCdpEnvironmentsConfigAzureLogStorage | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCdpEnvironmentsConfigAzureLogStorage | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // backup_storage_location_base - computed: true, optional: false, required: false
  public get backupStorageLocationBase() {
    return this.getStringAttribute('backup_storage_location_base');
  }

  // managed_identity - computed: true, optional: false, required: false
  public get managedIdentity() {
    return this.getStringAttribute('managed_identity');
  }

  // storage_location_base - computed: true, optional: false, required: false
  public get storageLocationBase() {
    return this.getStringAttribute('storage_location_base');
  }
}
export interface DataCdpEnvironmentsConfigAzureSecurityAccess {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudera/cdp/0.10.8/docs/data-sources/environments_config#default_security_group_ids DataCdpEnvironmentsConfig#default_security_group_ids}
  */
  readonly defaultSecurityGroupIds?: string[];
}

export function dataCdpEnvironmentsConfigAzureSecurityAccessToTerraform(struct?: DataCdpEnvironmentsConfigAzureSecurityAccess): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default_security_group_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.defaultSecurityGroupIds),
  }
}


export function dataCdpEnvironmentsConfigAzureSecurityAccessToHclTerraform(struct?: DataCdpEnvironmentsConfigAzureSecurityAccess): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    default_security_group_ids: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.defaultSecurityGroupIds),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataCdpEnvironmentsConfigAzureSecurityAccessOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCdpEnvironmentsConfigAzureSecurityAccess | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._defaultSecurityGroupIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultSecurityGroupIds = this._defaultSecurityGroupIds;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCdpEnvironmentsConfigAzureSecurityAccess | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._defaultSecurityGroupIds = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._defaultSecurityGroupIds = value.defaultSecurityGroupIds;
    }
  }

  // cidr - computed: true, optional: false, required: false
  public get cidr() {
    return this.getStringAttribute('cidr');
  }

  // default_security_group_id - computed: true, optional: false, required: false
  public get defaultSecurityGroupId() {
    return this.getStringAttribute('default_security_group_id');
  }

  // default_security_group_ids - computed: true, optional: true, required: false
  private _defaultSecurityGroupIds?: string[]; 
  public get defaultSecurityGroupIds() {
    return cdktf.Fn.tolist(this.getListAttribute('default_security_group_ids'));
  }
  public set defaultSecurityGroupIds(value: string[]) {
    this._defaultSecurityGroupIds = value;
  }
  public resetDefaultSecurityGroupIds() {
    this._defaultSecurityGroupIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultSecurityGroupIdsInput() {
    return this._defaultSecurityGroupIds;
  }

  // security_group_id_for_knox - computed: true, optional: false, required: false
  public get securityGroupIdForKnox() {
    return this.getStringAttribute('security_group_id_for_knox');
  }

  // security_group_ids_for_knox - computed: true, optional: false, required: false
  public get securityGroupIdsForKnox() {
    return cdktf.Fn.tolist(this.getListAttribute('security_group_ids_for_knox'));
  }
}
export interface DataCdpEnvironmentsConfigAzure {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudera/cdp/0.10.8/docs/data-sources/environments_config#encryption_key_resource_group_name DataCdpEnvironmentsConfig#encryption_key_resource_group_name}
  */
  readonly encryptionKeyResourceGroupName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudera/cdp/0.10.8/docs/data-sources/environments_config#encryption_key_url DataCdpEnvironmentsConfig#encryption_key_url}
  */
  readonly encryptionKeyUrl?: string;
}

export function dataCdpEnvironmentsConfigAzureToTerraform(struct?: DataCdpEnvironmentsConfigAzure): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    encryption_key_resource_group_name: cdktf.stringToTerraform(struct!.encryptionKeyResourceGroupName),
    encryption_key_url: cdktf.stringToTerraform(struct!.encryptionKeyUrl),
  }
}


export function dataCdpEnvironmentsConfigAzureToHclTerraform(struct?: DataCdpEnvironmentsConfigAzure): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    encryption_key_resource_group_name: {
      value: cdktf.stringToHclTerraform(struct!.encryptionKeyResourceGroupName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    encryption_key_url: {
      value: cdktf.stringToHclTerraform(struct!.encryptionKeyUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataCdpEnvironmentsConfigAzureOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCdpEnvironmentsConfigAzure | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._encryptionKeyResourceGroupName !== undefined) {
      hasAnyValues = true;
      internalValueResult.encryptionKeyResourceGroupName = this._encryptionKeyResourceGroupName;
    }
    if (this._encryptionKeyUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.encryptionKeyUrl = this._encryptionKeyUrl;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCdpEnvironmentsConfigAzure | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._encryptionKeyResourceGroupName = undefined;
      this._encryptionKeyUrl = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._encryptionKeyResourceGroupName = value.encryptionKeyResourceGroupName;
      this._encryptionKeyUrl = value.encryptionKeyUrl;
    }
  }

  // cascading_delete - computed: true, optional: false, required: false
  public get cascadingDelete() {
    return this.getBooleanAttribute('cascading_delete');
  }

  // create_private_endpoints - computed: true, optional: false, required: false
  public get createPrivateEndpoints() {
    return this.getBooleanAttribute('create_private_endpoints');
  }

  // credential_name - computed: true, optional: false, required: false
  public get credentialName() {
    return this.getStringAttribute('credential_name');
  }

  // crn - computed: true, optional: false, required: false
  public get crn() {
    return this.getStringAttribute('crn');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // enable_outbound_load_balancer - computed: true, optional: false, required: false
  public get enableOutboundLoadBalancer() {
    return this.getBooleanAttribute('enable_outbound_load_balancer');
  }

  // enable_tunnel - computed: true, optional: false, required: false
  public get enableTunnel() {
    return this.getBooleanAttribute('enable_tunnel');
  }

  // encryption_at_host - computed: true, optional: false, required: false
  public get encryptionAtHost() {
    return this.getBooleanAttribute('encryption_at_host');
  }

  // encryption_key_resource_group_name - computed: true, optional: true, required: false
  private _encryptionKeyResourceGroupName?: string; 
  public get encryptionKeyResourceGroupName() {
    return this.getStringAttribute('encryption_key_resource_group_name');
  }
  public set encryptionKeyResourceGroupName(value: string) {
    this._encryptionKeyResourceGroupName = value;
  }
  public resetEncryptionKeyResourceGroupName() {
    this._encryptionKeyResourceGroupName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encryptionKeyResourceGroupNameInput() {
    return this._encryptionKeyResourceGroupName;
  }

  // encryption_key_url - computed: true, optional: true, required: false
  private _encryptionKeyUrl?: string; 
  public get encryptionKeyUrl() {
    return this.getStringAttribute('encryption_key_url');
  }
  public set encryptionKeyUrl(value: string) {
    this._encryptionKeyUrl = value;
  }
  public resetEncryptionKeyUrl() {
    this._encryptionKeyUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encryptionKeyUrlInput() {
    return this._encryptionKeyUrl;
  }

  // encryption_user_managed_identity - computed: true, optional: false, required: false
  public get encryptionUserManagedIdentity() {
    return this.getStringAttribute('encryption_user_managed_identity');
  }

  // endpoint_access_gateway_scheme - computed: true, optional: false, required: false
  public get endpointAccessGatewayScheme() {
    return this.getStringAttribute('endpoint_access_gateway_scheme');
  }

  // endpoint_access_gateway_subnet_ids - computed: true, optional: false, required: false
  public get endpointAccessGatewaySubnetIds() {
    return cdktf.Fn.tolist(this.getListAttribute('endpoint_access_gateway_subnet_ids'));
  }

  // environment_name - computed: true, optional: false, required: false
  public get environmentName() {
    return this.getStringAttribute('environment_name');
  }

  // existing_network_params - computed: true, optional: false, required: false
  private _existingNetworkParams = new DataCdpEnvironmentsConfigAzureExistingNetworkParamsOutputReference(this, "existing_network_params");
  public get existingNetworkParams() {
    return this._existingNetworkParams;
  }

  // freeipa - computed: true, optional: false, required: false
  private _freeipa = new DataCdpEnvironmentsConfigAzureFreeipaOutputReference(this, "freeipa");
  public get freeipa() {
    return this._freeipa;
  }

  // log_storage - computed: true, optional: false, required: false
  private _logStorage = new DataCdpEnvironmentsConfigAzureLogStorageOutputReference(this, "log_storage");
  public get logStorage() {
    return this._logStorage;
  }

  // proxy_config_name - computed: true, optional: false, required: false
  public get proxyConfigName() {
    return this.getStringAttribute('proxy_config_name');
  }

  // public_key - computed: true, optional: false, required: false
  public get publicKey() {
    return this.getStringAttribute('public_key');
  }

  // region - computed: true, optional: false, required: false
  public get region() {
    return this.getStringAttribute('region');
  }

  // report_deployment_logs - computed: true, optional: false, required: false
  public get reportDeploymentLogs() {
    return this.getBooleanAttribute('report_deployment_logs');
  }

  // resource_group_name - computed: true, optional: false, required: false
  public get resourceGroupName() {
    return this.getStringAttribute('resource_group_name');
  }

  // security_access - computed: true, optional: false, required: false
  private _securityAccess = new DataCdpEnvironmentsConfigAzureSecurityAccessOutputReference(this, "security_access");
  public get securityAccess() {
    return this._securityAccess;
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // status_reason - computed: true, optional: false, required: false
  public get statusReason() {
    return this.getStringAttribute('status_reason');
  }

  // tags - computed: true, optional: false, required: false
  private _tags = new cdktf.StringMap(this, "tags");
  public get tags() {
    return this._tags;
  }

  // use_public_ip - computed: true, optional: false, required: false
  public get usePublicIp() {
    return this.getBooleanAttribute('use_public_ip');
  }

  // workload_analytics - computed: true, optional: false, required: false
  public get workloadAnalytics() {
    return this.getBooleanAttribute('workload_analytics');
  }
}
export interface DataCdpEnvironmentsConfigGcpExistingNetworkParams {
}

export function dataCdpEnvironmentsConfigGcpExistingNetworkParamsToTerraform(struct?: DataCdpEnvironmentsConfigGcpExistingNetworkParams): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCdpEnvironmentsConfigGcpExistingNetworkParamsToHclTerraform(struct?: DataCdpEnvironmentsConfigGcpExistingNetworkParams): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCdpEnvironmentsConfigGcpExistingNetworkParamsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCdpEnvironmentsConfigGcpExistingNetworkParams | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCdpEnvironmentsConfigGcpExistingNetworkParams | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // network_name - computed: true, optional: false, required: false
  public get networkName() {
    return this.getStringAttribute('network_name');
  }

  // shared_project_id - computed: true, optional: false, required: false
  public get sharedProjectId() {
    return this.getStringAttribute('shared_project_id');
  }

  // subnet_names - computed: true, optional: false, required: false
  public get subnetNames() {
    return this.getListAttribute('subnet_names');
  }
}
export interface DataCdpEnvironmentsConfigGcpFreeipaInstances {
}

export function dataCdpEnvironmentsConfigGcpFreeipaInstancesToTerraform(struct?: DataCdpEnvironmentsConfigGcpFreeipaInstances): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCdpEnvironmentsConfigGcpFreeipaInstancesToHclTerraform(struct?: DataCdpEnvironmentsConfigGcpFreeipaInstances): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCdpEnvironmentsConfigGcpFreeipaInstancesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataCdpEnvironmentsConfigGcpFreeipaInstances | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCdpEnvironmentsConfigGcpFreeipaInstances | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // availability_zone - computed: true, optional: false, required: false
  public get availabilityZone() {
    return this.getStringAttribute('availability_zone');
  }

  // discovery_fqdn - computed: true, optional: false, required: false
  public get discoveryFqdn() {
    return this.getStringAttribute('discovery_fqdn');
  }

  // instance_group - computed: true, optional: false, required: false
  public get instanceGroup() {
    return this.getStringAttribute('instance_group');
  }

  // instance_id - computed: true, optional: false, required: false
  public get instanceId() {
    return this.getStringAttribute('instance_id');
  }

  // instance_status - computed: true, optional: false, required: false
  public get instanceStatus() {
    return this.getStringAttribute('instance_status');
  }

  // instance_status_reason - computed: true, optional: false, required: false
  public get instanceStatusReason() {
    return this.getStringAttribute('instance_status_reason');
  }

  // instance_type - computed: true, optional: false, required: false
  public get instanceType() {
    return this.getStringAttribute('instance_type');
  }

  // instance_vm_type - computed: true, optional: false, required: false
  public get instanceVmType() {
    return this.getStringAttribute('instance_vm_type');
  }

  // life_cycle - computed: true, optional: false, required: false
  public get lifeCycle() {
    return this.getStringAttribute('life_cycle');
  }

  // private_ip - computed: true, optional: false, required: false
  public get privateIp() {
    return this.getStringAttribute('private_ip');
  }

  // public_ip - computed: true, optional: false, required: false
  public get publicIp() {
    return this.getStringAttribute('public_ip');
  }

  // ssh_port - computed: true, optional: false, required: false
  public get sshPort() {
    return this.getNumberAttribute('ssh_port');
  }

  // subnet_id - computed: true, optional: false, required: false
  public get subnetId() {
    return this.getStringAttribute('subnet_id');
  }
}

export class DataCdpEnvironmentsConfigGcpFreeipaInstancesList extends cdktf.ComplexList {

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
  public get(index: number): DataCdpEnvironmentsConfigGcpFreeipaInstancesOutputReference {
    return new DataCdpEnvironmentsConfigGcpFreeipaInstancesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataCdpEnvironmentsConfigGcpFreeipa {
}

export function dataCdpEnvironmentsConfigGcpFreeipaToTerraform(struct?: DataCdpEnvironmentsConfigGcpFreeipa): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCdpEnvironmentsConfigGcpFreeipaToHclTerraform(struct?: DataCdpEnvironmentsConfigGcpFreeipa): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCdpEnvironmentsConfigGcpFreeipaOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCdpEnvironmentsConfigGcpFreeipa | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCdpEnvironmentsConfigGcpFreeipa | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // catalog - computed: true, optional: false, required: false
  public get catalog() {
    return this.getStringAttribute('catalog');
  }

  // image_id - computed: true, optional: false, required: false
  public get imageId() {
    return this.getStringAttribute('image_id');
  }

  // instance_count_by_group - computed: true, optional: false, required: false
  public get instanceCountByGroup() {
    return this.getNumberAttribute('instance_count_by_group');
  }

  // instance_type - computed: true, optional: false, required: false
  public get instanceType() {
    return this.getStringAttribute('instance_type');
  }

  // instances - computed: true, optional: false, required: false
  private _instances = new DataCdpEnvironmentsConfigGcpFreeipaInstancesList(this, "instances", true);
  public get instances() {
    return this._instances;
  }

  // multi_az - computed: true, optional: false, required: false
  public get multiAz() {
    return this.getBooleanAttribute('multi_az');
  }

  // os - computed: true, optional: false, required: false
  public get os() {
    return this.getStringAttribute('os');
  }

  // recipes - computed: true, optional: false, required: false
  public get recipes() {
    return cdktf.Fn.tolist(this.getListAttribute('recipes'));
  }
}
export interface DataCdpEnvironmentsConfigGcpLogStorage {
}

export function dataCdpEnvironmentsConfigGcpLogStorageToTerraform(struct?: DataCdpEnvironmentsConfigGcpLogStorage): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCdpEnvironmentsConfigGcpLogStorageToHclTerraform(struct?: DataCdpEnvironmentsConfigGcpLogStorage): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCdpEnvironmentsConfigGcpLogStorageOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCdpEnvironmentsConfigGcpLogStorage | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCdpEnvironmentsConfigGcpLogStorage | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // backup_storage_location_base - computed: true, optional: false, required: false
  public get backupStorageLocationBase() {
    return this.getStringAttribute('backup_storage_location_base');
  }

  // service_account_email - computed: true, optional: false, required: false
  public get serviceAccountEmail() {
    return this.getStringAttribute('service_account_email');
  }

  // storage_location_base - computed: true, optional: false, required: false
  public get storageLocationBase() {
    return this.getStringAttribute('storage_location_base');
  }
}
export interface DataCdpEnvironmentsConfigGcpPollingOptions {
}

export function dataCdpEnvironmentsConfigGcpPollingOptionsToTerraform(struct?: DataCdpEnvironmentsConfigGcpPollingOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCdpEnvironmentsConfigGcpPollingOptionsToHclTerraform(struct?: DataCdpEnvironmentsConfigGcpPollingOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCdpEnvironmentsConfigGcpPollingOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCdpEnvironmentsConfigGcpPollingOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCdpEnvironmentsConfigGcpPollingOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // async - computed: true, optional: false, required: false
  public get async() {
    return this.getBooleanAttribute('async');
  }

  // call_failure_threshold - computed: true, optional: false, required: false
  public get callFailureThreshold() {
    return this.getNumberAttribute('call_failure_threshold');
  }

  // polling_timeout - computed: true, optional: false, required: false
  public get pollingTimeout() {
    return this.getNumberAttribute('polling_timeout');
  }
}
export interface DataCdpEnvironmentsConfigGcpSecurityAccess {
}

export function dataCdpEnvironmentsConfigGcpSecurityAccessToTerraform(struct?: DataCdpEnvironmentsConfigGcpSecurityAccess): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCdpEnvironmentsConfigGcpSecurityAccessToHclTerraform(struct?: DataCdpEnvironmentsConfigGcpSecurityAccess): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCdpEnvironmentsConfigGcpSecurityAccessOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCdpEnvironmentsConfigGcpSecurityAccess | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCdpEnvironmentsConfigGcpSecurityAccess | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // default_security_group_id - computed: true, optional: false, required: false
  public get defaultSecurityGroupId() {
    return this.getStringAttribute('default_security_group_id');
  }

  // security_group_id_for_knox - computed: true, optional: false, required: false
  public get securityGroupIdForKnox() {
    return this.getStringAttribute('security_group_id_for_knox');
  }
}
export interface DataCdpEnvironmentsConfigGcp {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudera/cdp/0.10.8/docs/data-sources/environments_config#environment_name DataCdpEnvironmentsConfig#environment_name}
  */
  readonly environmentName: string;
}

export function dataCdpEnvironmentsConfigGcpToTerraform(struct?: DataCdpEnvironmentsConfigGcp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    environment_name: cdktf.stringToTerraform(struct!.environmentName),
  }
}


export function dataCdpEnvironmentsConfigGcpToHclTerraform(struct?: DataCdpEnvironmentsConfigGcp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    environment_name: {
      value: cdktf.stringToHclTerraform(struct!.environmentName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataCdpEnvironmentsConfigGcpOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCdpEnvironmentsConfigGcp | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._environmentName !== undefined) {
      hasAnyValues = true;
      internalValueResult.environmentName = this._environmentName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCdpEnvironmentsConfigGcp | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._environmentName = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._environmentName = value.environmentName;
    }
  }

  // availability_zones - computed: true, optional: false, required: false
  public get availabilityZones() {
    return this.getListAttribute('availability_zones');
  }

  // cascading_delete - computed: true, optional: false, required: false
  public get cascadingDelete() {
    return this.getBooleanAttribute('cascading_delete');
  }

  // credential_name - computed: true, optional: false, required: false
  public get credentialName() {
    return this.getStringAttribute('credential_name');
  }

  // crn - computed: true, optional: false, required: false
  public get crn() {
    return this.getStringAttribute('crn');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // enable_tunnel - computed: true, optional: false, required: false
  public get enableTunnel() {
    return this.getBooleanAttribute('enable_tunnel');
  }

  // encryption_key - computed: true, optional: false, required: false
  public get encryptionKey() {
    return this.getStringAttribute('encryption_key');
  }

  // endpoint_access_gateway_scheme - computed: true, optional: false, required: false
  public get endpointAccessGatewayScheme() {
    return this.getStringAttribute('endpoint_access_gateway_scheme');
  }

  // environment_name - computed: true, optional: false, required: true
  private _environmentName?: string; 
  public get environmentName() {
    return this.getStringAttribute('environment_name');
  }
  public set environmentName(value: string) {
    this._environmentName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get environmentNameInput() {
    return this._environmentName;
  }

  // existing_network_params - computed: true, optional: false, required: false
  private _existingNetworkParams = new DataCdpEnvironmentsConfigGcpExistingNetworkParamsOutputReference(this, "existing_network_params");
  public get existingNetworkParams() {
    return this._existingNetworkParams;
  }

  // freeipa - computed: true, optional: false, required: false
  private _freeipa = new DataCdpEnvironmentsConfigGcpFreeipaOutputReference(this, "freeipa");
  public get freeipa() {
    return this._freeipa;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // log_storage - computed: true, optional: false, required: false
  private _logStorage = new DataCdpEnvironmentsConfigGcpLogStorageOutputReference(this, "log_storage");
  public get logStorage() {
    return this._logStorage;
  }

  // polling_options - computed: true, optional: false, required: false
  private _pollingOptions = new DataCdpEnvironmentsConfigGcpPollingOptionsOutputReference(this, "polling_options");
  public get pollingOptions() {
    return this._pollingOptions;
  }

  // proxy_config_name - computed: true, optional: false, required: false
  public get proxyConfigName() {
    return this.getStringAttribute('proxy_config_name');
  }

  // public_key - computed: true, optional: false, required: false
  public get publicKey() {
    return this.getStringAttribute('public_key');
  }

  // region - computed: true, optional: false, required: false
  public get region() {
    return this.getStringAttribute('region');
  }

  // report_deployment_logs - computed: true, optional: false, required: false
  public get reportDeploymentLogs() {
    return this.getBooleanAttribute('report_deployment_logs');
  }

  // security_access - computed: true, optional: false, required: false
  private _securityAccess = new DataCdpEnvironmentsConfigGcpSecurityAccessOutputReference(this, "security_access");
  public get securityAccess() {
    return this._securityAccess;
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // status_reason - computed: true, optional: false, required: false
  public get statusReason() {
    return this.getStringAttribute('status_reason');
  }

  // tags - computed: true, optional: false, required: false
  private _tags = new cdktf.StringMap(this, "tags");
  public get tags() {
    return this._tags;
  }

  // use_public_ip - computed: true, optional: false, required: false
  public get usePublicIp() {
    return this.getBooleanAttribute('use_public_ip');
  }

  // workload_analytics - computed: true, optional: false, required: false
  public get workloadAnalytics() {
    return this.getBooleanAttribute('workload_analytics');
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/cloudera/cdp/0.10.8/docs/data-sources/environments_config cdp_environments_config}
*/
export class DataCdpEnvironmentsConfig extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "cdp_environments_config";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataCdpEnvironmentsConfig resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataCdpEnvironmentsConfig to import
  * @param importFromId The id of the existing DataCdpEnvironmentsConfig that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudera/cdp/0.10.8/docs/data-sources/environments_config#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataCdpEnvironmentsConfig to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cdp_environments_config", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/cloudera/cdp/0.10.8/docs/data-sources/environments_config cdp_environments_config} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataCdpEnvironmentsConfigConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataCdpEnvironmentsConfigConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'cdp_environments_config',
      terraformGeneratorMetadata: {
        providerName: 'cdp',
        providerVersion: '0.10.8'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._crn = config.crn;
    this._name = config.name;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // aws - computed: true, optional: false, required: false
  private _aws = new DataCdpEnvironmentsConfigAwsOutputReference(this, "aws");
  public get aws() {
    return this._aws;
  }

  // azure - computed: true, optional: false, required: false
  private _azure = new DataCdpEnvironmentsConfigAzureOutputReference(this, "azure");
  public get azure() {
    return this._azure;
  }

  // crn - computed: false, optional: true, required: false
  private _crn?: string; 
  public get crn() {
    return this.getStringAttribute('crn');
  }
  public set crn(value: string) {
    this._crn = value;
  }
  public resetCrn() {
    this._crn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get crnInput() {
    return this._crn;
  }

  // gcp - computed: true, optional: false, required: false
  private _gcp = new DataCdpEnvironmentsConfigGcpOutputReference(this, "gcp");
  public get gcp() {
    return this._gcp;
  }

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      crn: cdktf.stringToTerraform(this._crn),
      name: cdktf.stringToTerraform(this._name),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      crn: {
        value: cdktf.stringToHclTerraform(this._crn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
