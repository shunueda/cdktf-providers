// https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/dbmulticloud_oracle_db_aws_key
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DbmulticloudOracleDbAwsKeyConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/dbmulticloud_oracle_db_aws_key#aws_account_id DbmulticloudOracleDbAwsKey#aws_account_id}
  */
  readonly awsAccountId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/dbmulticloud_oracle_db_aws_key#aws_key_arn DbmulticloudOracleDbAwsKey#aws_key_arn}
  */
  readonly awsKeyArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/dbmulticloud_oracle_db_aws_key#compartment_id DbmulticloudOracleDbAwsKey#compartment_id}
  */
  readonly compartmentId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/dbmulticloud_oracle_db_aws_key#defined_tags DbmulticloudOracleDbAwsKey#defined_tags}
  */
  readonly definedTags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/dbmulticloud_oracle_db_aws_key#display_name DbmulticloudOracleDbAwsKey#display_name}
  */
  readonly displayName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/dbmulticloud_oracle_db_aws_key#freeform_tags DbmulticloudOracleDbAwsKey#freeform_tags}
  */
  readonly freeformTags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/dbmulticloud_oracle_db_aws_key#id DbmulticloudOracleDbAwsKey#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/dbmulticloud_oracle_db_aws_key#is_aws_key_enabled DbmulticloudOracleDbAwsKey#is_aws_key_enabled}
  */
  readonly isAwsKeyEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/dbmulticloud_oracle_db_aws_key#location DbmulticloudOracleDbAwsKey#location}
  */
  readonly location?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/dbmulticloud_oracle_db_aws_key#oracle_db_connector_id DbmulticloudOracleDbAwsKey#oracle_db_connector_id}
  */
  readonly oracleDbConnectorId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/dbmulticloud_oracle_db_aws_key#properties DbmulticloudOracleDbAwsKey#properties}
  */
  readonly properties?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/dbmulticloud_oracle_db_aws_key#type DbmulticloudOracleDbAwsKey#type}
  */
  readonly type?: string;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/dbmulticloud_oracle_db_aws_key#timeouts DbmulticloudOracleDbAwsKey#timeouts}
  */
  readonly timeouts?: DbmulticloudOracleDbAwsKeyTimeouts;
}
export interface DbmulticloudOracleDbAwsKeyTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/dbmulticloud_oracle_db_aws_key#create DbmulticloudOracleDbAwsKey#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/dbmulticloud_oracle_db_aws_key#delete DbmulticloudOracleDbAwsKey#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/dbmulticloud_oracle_db_aws_key#update DbmulticloudOracleDbAwsKey#update}
  */
  readonly update?: string;
}

export function dbmulticloudOracleDbAwsKeyTimeoutsToTerraform(struct?: DbmulticloudOracleDbAwsKeyTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


export function dbmulticloudOracleDbAwsKeyTimeoutsToHclTerraform(struct?: DbmulticloudOracleDbAwsKeyTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    create: {
      value: cdktf.stringToHclTerraform(struct!.create),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    delete: {
      value: cdktf.stringToHclTerraform(struct!.delete),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    update: {
      value: cdktf.stringToHclTerraform(struct!.update),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DbmulticloudOracleDbAwsKeyTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DbmulticloudOracleDbAwsKeyTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._delete !== undefined) {
      hasAnyValues = true;
      internalValueResult.delete = this._delete;
    }
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DbmulticloudOracleDbAwsKeyTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
      this._update = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._create = value.create;
      this._delete = value.delete;
      this._update = value.update;
    }
  }

  // create - computed: false, optional: true, required: false
  private _create?: string; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create;
  }

  // delete - computed: false, optional: true, required: false
  private _delete?: string; 
  public get delete() {
    return this.getStringAttribute('delete');
  }
  public set delete(value: string) {
    this._delete = value;
  }
  public resetDelete() {
    this._delete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete;
  }

  // update - computed: false, optional: true, required: false
  private _update?: string; 
  public get update() {
    return this.getStringAttribute('update');
  }
  public set update(value: string) {
    this._update = value;
  }
  public resetUpdate() {
    this._update = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateInput() {
    return this._update;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/dbmulticloud_oracle_db_aws_key oci_dbmulticloud_oracle_db_aws_key}
*/
export class DbmulticloudOracleDbAwsKey extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_dbmulticloud_oracle_db_aws_key";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DbmulticloudOracleDbAwsKey resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DbmulticloudOracleDbAwsKey to import
  * @param importFromId The id of the existing DbmulticloudOracleDbAwsKey that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/dbmulticloud_oracle_db_aws_key#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DbmulticloudOracleDbAwsKey to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_dbmulticloud_oracle_db_aws_key", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/dbmulticloud_oracle_db_aws_key oci_dbmulticloud_oracle_db_aws_key} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DbmulticloudOracleDbAwsKeyConfig
  */
  public constructor(scope: Construct, id: string, config: DbmulticloudOracleDbAwsKeyConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_dbmulticloud_oracle_db_aws_key',
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
    this._awsAccountId = config.awsAccountId;
    this._awsKeyArn = config.awsKeyArn;
    this._compartmentId = config.compartmentId;
    this._definedTags = config.definedTags;
    this._displayName = config.displayName;
    this._freeformTags = config.freeformTags;
    this._id = config.id;
    this._isAwsKeyEnabled = config.isAwsKeyEnabled;
    this._location = config.location;
    this._oracleDbConnectorId = config.oracleDbConnectorId;
    this._properties = config.properties;
    this._type = config.type;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // aws_account_id - computed: true, optional: true, required: false
  private _awsAccountId?: string; 
  public get awsAccountId() {
    return this.getStringAttribute('aws_account_id');
  }
  public set awsAccountId(value: string) {
    this._awsAccountId = value;
  }
  public resetAwsAccountId() {
    this._awsAccountId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awsAccountIdInput() {
    return this._awsAccountId;
  }

  // aws_key_arn - computed: true, optional: true, required: false
  private _awsKeyArn?: string; 
  public get awsKeyArn() {
    return this.getStringAttribute('aws_key_arn');
  }
  public set awsKeyArn(value: string) {
    this._awsKeyArn = value;
  }
  public resetAwsKeyArn() {
    this._awsKeyArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awsKeyArnInput() {
    return this._awsKeyArn;
  }

  // compartment_id - computed: false, optional: false, required: true
  private _compartmentId?: string; 
  public get compartmentId() {
    return this.getStringAttribute('compartment_id');
  }
  public set compartmentId(value: string) {
    this._compartmentId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get compartmentIdInput() {
    return this._compartmentId;
  }

  // defined_tags - computed: true, optional: true, required: false
  private _definedTags?: { [key: string]: string }; 
  public get definedTags() {
    return this.getStringMapAttribute('defined_tags');
  }
  public set definedTags(value: { [key: string]: string }) {
    this._definedTags = value;
  }
  public resetDefinedTags() {
    this._definedTags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get definedTagsInput() {
    return this._definedTags;
  }

  // display_name - computed: false, optional: false, required: true
  private _displayName?: string; 
  public get displayName() {
    return this.getStringAttribute('display_name');
  }
  public set displayName(value: string) {
    this._displayName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get displayNameInput() {
    return this._displayName;
  }

  // freeform_tags - computed: true, optional: true, required: false
  private _freeformTags?: { [key: string]: string }; 
  public get freeformTags() {
    return this.getStringMapAttribute('freeform_tags');
  }
  public set freeformTags(value: { [key: string]: string }) {
    this._freeformTags = value;
  }
  public resetFreeformTags() {
    this._freeformTags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get freeformTagsInput() {
    return this._freeformTags;
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

  // is_aws_key_enabled - computed: true, optional: true, required: false
  private _isAwsKeyEnabled?: boolean | cdktf.IResolvable; 
  public get isAwsKeyEnabled() {
    return this.getBooleanAttribute('is_aws_key_enabled');
  }
  public set isAwsKeyEnabled(value: boolean | cdktf.IResolvable) {
    this._isAwsKeyEnabled = value;
  }
  public resetIsAwsKeyEnabled() {
    this._isAwsKeyEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isAwsKeyEnabledInput() {
    return this._isAwsKeyEnabled;
  }

  // lifecycle_state_details - computed: true, optional: false, required: false
  public get lifecycleStateDetails() {
    return this.getStringAttribute('lifecycle_state_details');
  }

  // location - computed: true, optional: true, required: false
  private _location?: string; 
  public get location() {
    return this.getStringAttribute('location');
  }
  public set location(value: string) {
    this._location = value;
  }
  public resetLocation() {
    this._location = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get locationInput() {
    return this._location;
  }

  // oracle_db_connector_id - computed: false, optional: false, required: true
  private _oracleDbConnectorId?: string; 
  public get oracleDbConnectorId() {
    return this.getStringAttribute('oracle_db_connector_id');
  }
  public set oracleDbConnectorId(value: string) {
    this._oracleDbConnectorId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get oracleDbConnectorIdInput() {
    return this._oracleDbConnectorId;
  }

  // properties - computed: true, optional: true, required: false
  private _properties?: { [key: string]: string }; 
  public get properties() {
    return this.getStringMapAttribute('properties');
  }
  public set properties(value: { [key: string]: string }) {
    this._properties = value;
  }
  public resetProperties() {
    this._properties = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get propertiesInput() {
    return this._properties;
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // system_tags - computed: true, optional: false, required: false
  private _systemTags = new cdktf.StringMap(this, "system_tags");
  public get systemTags() {
    return this._systemTags;
  }

  // time_created - computed: true, optional: false, required: false
  public get timeCreated() {
    return this.getStringAttribute('time_created');
  }

  // time_updated - computed: true, optional: false, required: false
  public get timeUpdated() {
    return this.getStringAttribute('time_updated');
  }

  // type - computed: true, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new DbmulticloudOracleDbAwsKeyTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: DbmulticloudOracleDbAwsKeyTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      aws_account_id: cdktf.stringToTerraform(this._awsAccountId),
      aws_key_arn: cdktf.stringToTerraform(this._awsKeyArn),
      compartment_id: cdktf.stringToTerraform(this._compartmentId),
      defined_tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._definedTags),
      display_name: cdktf.stringToTerraform(this._displayName),
      freeform_tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._freeformTags),
      id: cdktf.stringToTerraform(this._id),
      is_aws_key_enabled: cdktf.booleanToTerraform(this._isAwsKeyEnabled),
      location: cdktf.stringToTerraform(this._location),
      oracle_db_connector_id: cdktf.stringToTerraform(this._oracleDbConnectorId),
      properties: cdktf.hashMapper(cdktf.stringToTerraform)(this._properties),
      type: cdktf.stringToTerraform(this._type),
      timeouts: dbmulticloudOracleDbAwsKeyTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      aws_account_id: {
        value: cdktf.stringToHclTerraform(this._awsAccountId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      aws_key_arn: {
        value: cdktf.stringToHclTerraform(this._awsKeyArn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      compartment_id: {
        value: cdktf.stringToHclTerraform(this._compartmentId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      defined_tags: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._definedTags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      display_name: {
        value: cdktf.stringToHclTerraform(this._displayName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      freeform_tags: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._freeformTags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      is_aws_key_enabled: {
        value: cdktf.booleanToHclTerraform(this._isAwsKeyEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      location: {
        value: cdktf.stringToHclTerraform(this._location),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      oracle_db_connector_id: {
        value: cdktf.stringToHclTerraform(this._oracleDbConnectorId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      properties: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._properties),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      type: {
        value: cdktf.stringToHclTerraform(this._type),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      timeouts: {
        value: dbmulticloudOracleDbAwsKeyTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DbmulticloudOracleDbAwsKeyTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
