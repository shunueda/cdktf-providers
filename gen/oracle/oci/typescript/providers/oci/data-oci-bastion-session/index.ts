// https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/bastion_session
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOciBastionSessionConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/bastion_session#session_id DataOciBastionSession#session_id}
  */
  readonly sessionId: string;
}
export interface DataOciBastionSessionKeyDetails {
}

export function dataOciBastionSessionKeyDetailsToTerraform(struct?: DataOciBastionSessionKeyDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciBastionSessionKeyDetailsToHclTerraform(struct?: DataOciBastionSessionKeyDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciBastionSessionKeyDetailsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciBastionSessionKeyDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciBastionSessionKeyDetails | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // public_key_content - computed: true, optional: false, required: false
  public get publicKeyContent() {
    return this.getStringAttribute('public_key_content');
  }
}

export class DataOciBastionSessionKeyDetailsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciBastionSessionKeyDetailsOutputReference {
    return new DataOciBastionSessionKeyDetailsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciBastionSessionTargetResourceDetails {
}

export function dataOciBastionSessionTargetResourceDetailsToTerraform(struct?: DataOciBastionSessionTargetResourceDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciBastionSessionTargetResourceDetailsToHclTerraform(struct?: DataOciBastionSessionTargetResourceDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciBastionSessionTargetResourceDetailsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciBastionSessionTargetResourceDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciBastionSessionTargetResourceDetails | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // session_type - computed: true, optional: false, required: false
  public get sessionType() {
    return this.getStringAttribute('session_type');
  }

  // target_resource_display_name - computed: true, optional: false, required: false
  public get targetResourceDisplayName() {
    return this.getStringAttribute('target_resource_display_name');
  }

  // target_resource_fqdn - computed: true, optional: false, required: false
  public get targetResourceFqdn() {
    return this.getStringAttribute('target_resource_fqdn');
  }

  // target_resource_id - computed: true, optional: false, required: false
  public get targetResourceId() {
    return this.getStringAttribute('target_resource_id');
  }

  // target_resource_operating_system_user_name - computed: true, optional: false, required: false
  public get targetResourceOperatingSystemUserName() {
    return this.getStringAttribute('target_resource_operating_system_user_name');
  }

  // target_resource_port - computed: true, optional: false, required: false
  public get targetResourcePort() {
    return this.getNumberAttribute('target_resource_port');
  }

  // target_resource_private_ip_address - computed: true, optional: false, required: false
  public get targetResourcePrivateIpAddress() {
    return this.getStringAttribute('target_resource_private_ip_address');
  }
}

export class DataOciBastionSessionTargetResourceDetailsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciBastionSessionTargetResourceDetailsOutputReference {
    return new DataOciBastionSessionTargetResourceDetailsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/bastion_session oci_bastion_session}
*/
export class DataOciBastionSession extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_bastion_session";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataOciBastionSession resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataOciBastionSession to import
  * @param importFromId The id of the existing DataOciBastionSession that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/bastion_session#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataOciBastionSession to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_bastion_session", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/bastion_session oci_bastion_session} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOciBastionSessionConfig
  */
  public constructor(scope: Construct, id: string, config: DataOciBastionSessionConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_bastion_session',
      terraformGeneratorMetadata: {
        providerName: 'oci',
        providerVersion: '7.29.0',
        providerVersionConstraint: '7.29.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._sessionId = config.sessionId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // bastion_id - computed: true, optional: false, required: false
  public get bastionId() {
    return this.getStringAttribute('bastion_id');
  }

  // bastion_name - computed: true, optional: false, required: false
  public get bastionName() {
    return this.getStringAttribute('bastion_name');
  }

  // bastion_public_host_key_info - computed: true, optional: false, required: false
  public get bastionPublicHostKeyInfo() {
    return this.getStringAttribute('bastion_public_host_key_info');
  }

  // bastion_user_name - computed: true, optional: false, required: false
  public get bastionUserName() {
    return this.getStringAttribute('bastion_user_name');
  }

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // key_details - computed: true, optional: false, required: false
  private _keyDetails = new DataOciBastionSessionKeyDetailsList(this, "key_details", false);
  public get keyDetails() {
    return this._keyDetails;
  }

  // key_type - computed: true, optional: false, required: false
  public get keyType() {
    return this.getStringAttribute('key_type');
  }

  // lifecycle_details - computed: true, optional: false, required: false
  public get lifecycleDetails() {
    return this.getStringAttribute('lifecycle_details');
  }

  // session_id - computed: false, optional: false, required: true
  private _sessionId?: string; 
  public get sessionId() {
    return this.getStringAttribute('session_id');
  }
  public set sessionId(value: string) {
    this._sessionId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sessionIdInput() {
    return this._sessionId;
  }

  // session_ttl_in_seconds - computed: true, optional: false, required: false
  public get sessionTtlInSeconds() {
    return this.getNumberAttribute('session_ttl_in_seconds');
  }

  // ssh_metadata - computed: true, optional: false, required: false
  private _sshMetadata = new cdktf.StringMap(this, "ssh_metadata");
  public get sshMetadata() {
    return this._sshMetadata;
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // target_resource_details - computed: true, optional: false, required: false
  private _targetResourceDetails = new DataOciBastionSessionTargetResourceDetailsList(this, "target_resource_details", false);
  public get targetResourceDetails() {
    return this._targetResourceDetails;
  }

  // time_created - computed: true, optional: false, required: false
  public get timeCreated() {
    return this.getStringAttribute('time_created');
  }

  // time_updated - computed: true, optional: false, required: false
  public get timeUpdated() {
    return this.getStringAttribute('time_updated');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      session_id: cdktf.stringToTerraform(this._sessionId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      session_id: {
        value: cdktf.stringToHclTerraform(this._sessionId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
