// https://registry.terraform.io/providers/nhn-cloud/nhncloud/1.0.6/docs/data-sources/keymanager_secret_v1
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataNhncloudKeymanagerSecretV1Config extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nhn-cloud/nhncloud/1.0.6/docs/data-sources/keymanager_secret_v1#acl_only DataNhncloudKeymanagerSecretV1#acl_only}
  */
  readonly aclOnly?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nhn-cloud/nhncloud/1.0.6/docs/data-sources/keymanager_secret_v1#algorithm DataNhncloudKeymanagerSecretV1#algorithm}
  */
  readonly algorithm?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nhn-cloud/nhncloud/1.0.6/docs/data-sources/keymanager_secret_v1#bit_length DataNhncloudKeymanagerSecretV1#bit_length}
  */
  readonly bitLength?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nhn-cloud/nhncloud/1.0.6/docs/data-sources/keymanager_secret_v1#created_at_filter DataNhncloudKeymanagerSecretV1#created_at_filter}
  */
  readonly createdAtFilter?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nhn-cloud/nhncloud/1.0.6/docs/data-sources/keymanager_secret_v1#expiration_filter DataNhncloudKeymanagerSecretV1#expiration_filter}
  */
  readonly expirationFilter?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nhn-cloud/nhncloud/1.0.6/docs/data-sources/keymanager_secret_v1#id DataNhncloudKeymanagerSecretV1#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nhn-cloud/nhncloud/1.0.6/docs/data-sources/keymanager_secret_v1#mode DataNhncloudKeymanagerSecretV1#mode}
  */
  readonly mode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nhn-cloud/nhncloud/1.0.6/docs/data-sources/keymanager_secret_v1#name DataNhncloudKeymanagerSecretV1#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nhn-cloud/nhncloud/1.0.6/docs/data-sources/keymanager_secret_v1#region DataNhncloudKeymanagerSecretV1#region}
  */
  readonly region?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nhn-cloud/nhncloud/1.0.6/docs/data-sources/keymanager_secret_v1#secret_type DataNhncloudKeymanagerSecretV1#secret_type}
  */
  readonly secretType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nhn-cloud/nhncloud/1.0.6/docs/data-sources/keymanager_secret_v1#updated_at_filter DataNhncloudKeymanagerSecretV1#updated_at_filter}
  */
  readonly updatedAtFilter?: string;
}
export interface DataNhncloudKeymanagerSecretV1AclRead {
}

export function dataNhncloudKeymanagerSecretV1AclReadToTerraform(struct?: DataNhncloudKeymanagerSecretV1AclRead): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNhncloudKeymanagerSecretV1AclReadToHclTerraform(struct?: DataNhncloudKeymanagerSecretV1AclRead): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNhncloudKeymanagerSecretV1AclReadOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNhncloudKeymanagerSecretV1AclRead | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNhncloudKeymanagerSecretV1AclRead | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // project_access - computed: true, optional: false, required: false
  public get projectAccess() {
    return this.getBooleanAttribute('project_access');
  }

  // updated_at - computed: true, optional: false, required: false
  public get updatedAt() {
    return this.getStringAttribute('updated_at');
  }

  // users - computed: true, optional: false, required: false
  public get users() {
    return cdktf.Fn.tolist(this.getListAttribute('users'));
  }
}

export class DataNhncloudKeymanagerSecretV1AclReadList extends cdktf.ComplexList {

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
  public get(index: number): DataNhncloudKeymanagerSecretV1AclReadOutputReference {
    return new DataNhncloudKeymanagerSecretV1AclReadOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNhncloudKeymanagerSecretV1Acl {
}

export function dataNhncloudKeymanagerSecretV1AclToTerraform(struct?: DataNhncloudKeymanagerSecretV1Acl): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNhncloudKeymanagerSecretV1AclToHclTerraform(struct?: DataNhncloudKeymanagerSecretV1Acl): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNhncloudKeymanagerSecretV1AclOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNhncloudKeymanagerSecretV1Acl | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNhncloudKeymanagerSecretV1Acl | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // read - computed: true, optional: false, required: false
  private _read = new DataNhncloudKeymanagerSecretV1AclReadList(this, "read", false);
  public get read() {
    return this._read;
  }
}

export class DataNhncloudKeymanagerSecretV1AclList extends cdktf.ComplexList {

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
  public get(index: number): DataNhncloudKeymanagerSecretV1AclOutputReference {
    return new DataNhncloudKeymanagerSecretV1AclOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/nhn-cloud/nhncloud/1.0.6/docs/data-sources/keymanager_secret_v1 nhncloud_keymanager_secret_v1}
*/
export class DataNhncloudKeymanagerSecretV1 extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "nhncloud_keymanager_secret_v1";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataNhncloudKeymanagerSecretV1 resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataNhncloudKeymanagerSecretV1 to import
  * @param importFromId The id of the existing DataNhncloudKeymanagerSecretV1 that should be imported. Refer to the {@link https://registry.terraform.io/providers/nhn-cloud/nhncloud/1.0.6/docs/data-sources/keymanager_secret_v1#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataNhncloudKeymanagerSecretV1 to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "nhncloud_keymanager_secret_v1", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/nhn-cloud/nhncloud/1.0.6/docs/data-sources/keymanager_secret_v1 nhncloud_keymanager_secret_v1} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataNhncloudKeymanagerSecretV1Config = {}
  */
  public constructor(scope: Construct, id: string, config: DataNhncloudKeymanagerSecretV1Config = {}) {
    super(scope, id, {
      terraformResourceType: 'nhncloud_keymanager_secret_v1',
      terraformGeneratorMetadata: {
        providerName: 'nhncloud',
        providerVersion: '1.0.6'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._aclOnly = config.aclOnly;
    this._algorithm = config.algorithm;
    this._bitLength = config.bitLength;
    this._createdAtFilter = config.createdAtFilter;
    this._expirationFilter = config.expirationFilter;
    this._id = config.id;
    this._mode = config.mode;
    this._name = config.name;
    this._region = config.region;
    this._secretType = config.secretType;
    this._updatedAtFilter = config.updatedAtFilter;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // acl - computed: true, optional: false, required: false
  private _acl = new DataNhncloudKeymanagerSecretV1AclList(this, "acl", false);
  public get acl() {
    return this._acl;
  }

  // acl_only - computed: false, optional: true, required: false
  private _aclOnly?: boolean | cdktf.IResolvable; 
  public get aclOnly() {
    return this.getBooleanAttribute('acl_only');
  }
  public set aclOnly(value: boolean | cdktf.IResolvable) {
    this._aclOnly = value;
  }
  public resetAclOnly() {
    this._aclOnly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aclOnlyInput() {
    return this._aclOnly;
  }

  // algorithm - computed: false, optional: true, required: false
  private _algorithm?: string; 
  public get algorithm() {
    return this.getStringAttribute('algorithm');
  }
  public set algorithm(value: string) {
    this._algorithm = value;
  }
  public resetAlgorithm() {
    this._algorithm = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get algorithmInput() {
    return this._algorithm;
  }

  // bit_length - computed: false, optional: true, required: false
  private _bitLength?: number; 
  public get bitLength() {
    return this.getNumberAttribute('bit_length');
  }
  public set bitLength(value: number) {
    this._bitLength = value;
  }
  public resetBitLength() {
    this._bitLength = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bitLengthInput() {
    return this._bitLength;
  }

  // content_types - computed: true, optional: false, required: false
  private _contentTypes = new cdktf.StringMap(this, "content_types");
  public get contentTypes() {
    return this._contentTypes;
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // created_at_filter - computed: false, optional: true, required: false
  private _createdAtFilter?: string; 
  public get createdAtFilter() {
    return this.getStringAttribute('created_at_filter');
  }
  public set createdAtFilter(value: string) {
    this._createdAtFilter = value;
  }
  public resetCreatedAtFilter() {
    this._createdAtFilter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createdAtFilterInput() {
    return this._createdAtFilter;
  }

  // creator_id - computed: true, optional: false, required: false
  public get creatorId() {
    return this.getStringAttribute('creator_id');
  }

  // expiration - computed: true, optional: false, required: false
  public get expiration() {
    return this.getStringAttribute('expiration');
  }

  // expiration_filter - computed: false, optional: true, required: false
  private _expirationFilter?: string; 
  public get expirationFilter() {
    return this.getStringAttribute('expiration_filter');
  }
  public set expirationFilter(value: string) {
    this._expirationFilter = value;
  }
  public resetExpirationFilter() {
    this._expirationFilter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get expirationFilterInput() {
    return this._expirationFilter;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // metadata - computed: true, optional: false, required: false
  private _metadata = new cdktf.StringMap(this, "metadata");
  public get metadata() {
    return this._metadata;
  }

  // mode - computed: false, optional: true, required: false
  private _mode?: string; 
  public get mode() {
    return this.getStringAttribute('mode');
  }
  public set mode(value: string) {
    this._mode = value;
  }
  public resetMode() {
    this._mode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modeInput() {
    return this._mode;
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

  // payload - computed: true, optional: false, required: false
  public get payload() {
    return this.getStringAttribute('payload');
  }

  // payload_content_encoding - computed: true, optional: false, required: false
  public get payloadContentEncoding() {
    return this.getStringAttribute('payload_content_encoding');
  }

  // payload_content_type - computed: true, optional: false, required: false
  public get payloadContentType() {
    return this.getStringAttribute('payload_content_type');
  }

  // region - computed: false, optional: true, required: false
  private _region?: string; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  public resetRegion() {
    this._region = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
  }

  // secret_ref - computed: true, optional: false, required: false
  public get secretRef() {
    return this.getStringAttribute('secret_ref');
  }

  // secret_type - computed: false, optional: true, required: false
  private _secretType?: string; 
  public get secretType() {
    return this.getStringAttribute('secret_type');
  }
  public set secretType(value: string) {
    this._secretType = value;
  }
  public resetSecretType() {
    this._secretType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretTypeInput() {
    return this._secretType;
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // updated_at - computed: true, optional: false, required: false
  public get updatedAt() {
    return this.getStringAttribute('updated_at');
  }

  // updated_at_filter - computed: false, optional: true, required: false
  private _updatedAtFilter?: string; 
  public get updatedAtFilter() {
    return this.getStringAttribute('updated_at_filter');
  }
  public set updatedAtFilter(value: string) {
    this._updatedAtFilter = value;
  }
  public resetUpdatedAtFilter() {
    this._updatedAtFilter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updatedAtFilterInput() {
    return this._updatedAtFilter;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      acl_only: cdktf.booleanToTerraform(this._aclOnly),
      algorithm: cdktf.stringToTerraform(this._algorithm),
      bit_length: cdktf.numberToTerraform(this._bitLength),
      created_at_filter: cdktf.stringToTerraform(this._createdAtFilter),
      expiration_filter: cdktf.stringToTerraform(this._expirationFilter),
      id: cdktf.stringToTerraform(this._id),
      mode: cdktf.stringToTerraform(this._mode),
      name: cdktf.stringToTerraform(this._name),
      region: cdktf.stringToTerraform(this._region),
      secret_type: cdktf.stringToTerraform(this._secretType),
      updated_at_filter: cdktf.stringToTerraform(this._updatedAtFilter),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      acl_only: {
        value: cdktf.booleanToHclTerraform(this._aclOnly),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      algorithm: {
        value: cdktf.stringToHclTerraform(this._algorithm),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      bit_length: {
        value: cdktf.numberToHclTerraform(this._bitLength),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      created_at_filter: {
        value: cdktf.stringToHclTerraform(this._createdAtFilter),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      expiration_filter: {
        value: cdktf.stringToHclTerraform(this._expirationFilter),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      mode: {
        value: cdktf.stringToHclTerraform(this._mode),
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
      region: {
        value: cdktf.stringToHclTerraform(this._region),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      secret_type: {
        value: cdktf.stringToHclTerraform(this._secretType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      updated_at_filter: {
        value: cdktf.stringToHclTerraform(this._updatedAtFilter),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
