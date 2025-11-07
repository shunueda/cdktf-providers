// https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/data-sources/cloudaccess_keys
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAkamaiCloudaccessKeysConfig extends cdktf.TerraformMetaArguments {
}
export interface DataAkamaiCloudaccessKeysAccessKeysGroups {
}

export function dataAkamaiCloudaccessKeysAccessKeysGroupsToTerraform(struct?: DataAkamaiCloudaccessKeysAccessKeysGroups): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAkamaiCloudaccessKeysAccessKeysGroupsToHclTerraform(struct?: DataAkamaiCloudaccessKeysAccessKeysGroups): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAkamaiCloudaccessKeysAccessKeysGroupsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAkamaiCloudaccessKeysAccessKeysGroups | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAkamaiCloudaccessKeysAccessKeysGroups | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // contracts_ids - computed: true, optional: false, required: false
  public get contractsIds() {
    return this.getListAttribute('contracts_ids');
  }

  // group_id - computed: true, optional: false, required: false
  public get groupId() {
    return this.getNumberAttribute('group_id');
  }

  // group_name - computed: true, optional: false, required: false
  public get groupName() {
    return this.getStringAttribute('group_name');
  }
}

export class DataAkamaiCloudaccessKeysAccessKeysGroupsList extends cdktf.ComplexList {

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
  public get(index: number): DataAkamaiCloudaccessKeysAccessKeysGroupsOutputReference {
    return new DataAkamaiCloudaccessKeysAccessKeysGroupsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAkamaiCloudaccessKeysAccessKeysNetworkConfiguration {
}

export function dataAkamaiCloudaccessKeysAccessKeysNetworkConfigurationToTerraform(struct?: DataAkamaiCloudaccessKeysAccessKeysNetworkConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAkamaiCloudaccessKeysAccessKeysNetworkConfigurationToHclTerraform(struct?: DataAkamaiCloudaccessKeysAccessKeysNetworkConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAkamaiCloudaccessKeysAccessKeysNetworkConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAkamaiCloudaccessKeysAccessKeysNetworkConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAkamaiCloudaccessKeysAccessKeysNetworkConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // additional_cdn - computed: true, optional: false, required: false
  public get additionalCdn() {
    return this.getStringAttribute('additional_cdn');
  }

  // security_network - computed: true, optional: false, required: false
  public get securityNetwork() {
    return this.getStringAttribute('security_network');
  }
}
export interface DataAkamaiCloudaccessKeysAccessKeys {
  /**
  * Name of the access key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/data-sources/cloudaccess_keys#access_key_name DataAkamaiCloudaccessKeys#access_key_name}
  */
  readonly accessKeyName: string;
}

export function dataAkamaiCloudaccessKeysAccessKeysToTerraform(struct?: DataAkamaiCloudaccessKeysAccessKeys): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    access_key_name: cdktf.stringToTerraform(struct!.accessKeyName),
  }
}


export function dataAkamaiCloudaccessKeysAccessKeysToHclTerraform(struct?: DataAkamaiCloudaccessKeysAccessKeys): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    access_key_name: {
      value: cdktf.stringToHclTerraform(struct!.accessKeyName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataAkamaiCloudaccessKeysAccessKeysOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAkamaiCloudaccessKeysAccessKeys | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accessKeyName !== undefined) {
      hasAnyValues = true;
      internalValueResult.accessKeyName = this._accessKeyName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAkamaiCloudaccessKeysAccessKeys | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._accessKeyName = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._accessKeyName = value.accessKeyName;
    }
  }

  // access_key_name - computed: true, optional: false, required: true
  private _accessKeyName?: string; 
  public get accessKeyName() {
    return this.getStringAttribute('access_key_name');
  }
  public set accessKeyName(value: string) {
    this._accessKeyName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get accessKeyNameInput() {
    return this._accessKeyName;
  }

  // access_key_uid - computed: true, optional: false, required: false
  public get accessKeyUid() {
    return this.getNumberAttribute('access_key_uid');
  }

  // authentication_method - computed: true, optional: false, required: false
  public get authenticationMethod() {
    return this.getStringAttribute('authentication_method');
  }

  // created_by - computed: true, optional: false, required: false
  public get createdBy() {
    return this.getStringAttribute('created_by');
  }

  // created_time - computed: true, optional: false, required: false
  public get createdTime() {
    return this.getStringAttribute('created_time');
  }

  // groups - computed: true, optional: false, required: false
  private _groups = new DataAkamaiCloudaccessKeysAccessKeysGroupsList(this, "groups", false);
  public get groups() {
    return this._groups;
  }

  // latest_version - computed: true, optional: false, required: false
  public get latestVersion() {
    return this.getNumberAttribute('latest_version');
  }

  // network_configuration - computed: true, optional: false, required: false
  private _networkConfiguration = new DataAkamaiCloudaccessKeysAccessKeysNetworkConfigurationOutputReference(this, "network_configuration");
  public get networkConfiguration() {
    return this._networkConfiguration;
  }
}

export class DataAkamaiCloudaccessKeysAccessKeysList extends cdktf.ComplexList {
  public internalValue? : DataAkamaiCloudaccessKeysAccessKeys[] | cdktf.IResolvable

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
  public get(index: number): DataAkamaiCloudaccessKeysAccessKeysOutputReference {
    return new DataAkamaiCloudaccessKeysAccessKeysOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/data-sources/cloudaccess_keys akamai_cloudaccess_keys}
*/
export class DataAkamaiCloudaccessKeys extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "akamai_cloudaccess_keys";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataAkamaiCloudaccessKeys resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAkamaiCloudaccessKeys to import
  * @param importFromId The id of the existing DataAkamaiCloudaccessKeys that should be imported. Refer to the {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/data-sources/cloudaccess_keys#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAkamaiCloudaccessKeys to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "akamai_cloudaccess_keys", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/data-sources/cloudaccess_keys akamai_cloudaccess_keys} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAkamaiCloudaccessKeysConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataAkamaiCloudaccessKeysConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'akamai_cloudaccess_keys',
      terraformGeneratorMetadata: {
        providerName: 'akamai',
        providerVersion: '9.1.0'
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

  // access_keys - computed: true, optional: false, required: false
  private _accessKeys = new DataAkamaiCloudaccessKeysAccessKeysList(this, "access_keys", false);
  public get accessKeys() {
    return this._accessKeys;
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
