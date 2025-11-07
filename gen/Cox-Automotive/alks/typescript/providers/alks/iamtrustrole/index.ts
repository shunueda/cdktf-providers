// https://registry.terraform.io/providers/cox-automotive/alks/2.8.2/docs/resources/iamtrustrole
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface IamtrustroleConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cox-automotive/alks/2.8.2/docs/resources/iamtrustrole#enable_alks_access Iamtrustrole#enable_alks_access}
  */
  readonly enableAlksAccess?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cox-automotive/alks/2.8.2/docs/resources/iamtrustrole#id Iamtrustrole#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cox-automotive/alks/2.8.2/docs/resources/iamtrustrole#max_session_duration_in_seconds Iamtrustrole#max_session_duration_in_seconds}
  */
  readonly maxSessionDurationInSeconds?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cox-automotive/alks/2.8.2/docs/resources/iamtrustrole#name Iamtrustrole#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cox-automotive/alks/2.8.2/docs/resources/iamtrustrole#name_prefix Iamtrustrole#name_prefix}
  */
  readonly namePrefix?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cox-automotive/alks/2.8.2/docs/resources/iamtrustrole#tags Iamtrustrole#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cox-automotive/alks/2.8.2/docs/resources/iamtrustrole#tags_all Iamtrustrole#tags_all}
  */
  readonly tagsAll?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cox-automotive/alks/2.8.2/docs/resources/iamtrustrole#trust_arn Iamtrustrole#trust_arn}
  */
  readonly trustArn: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cox-automotive/alks/2.8.2/docs/resources/iamtrustrole#type Iamtrustrole#type}
  */
  readonly type: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/cox-automotive/alks/2.8.2/docs/resources/iamtrustrole alks_iamtrustrole}
*/
export class Iamtrustrole extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "alks_iamtrustrole";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Iamtrustrole resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Iamtrustrole to import
  * @param importFromId The id of the existing Iamtrustrole that should be imported. Refer to the {@link https://registry.terraform.io/providers/cox-automotive/alks/2.8.2/docs/resources/iamtrustrole#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Iamtrustrole to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "alks_iamtrustrole", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/cox-automotive/alks/2.8.2/docs/resources/iamtrustrole alks_iamtrustrole} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options IamtrustroleConfig
  */
  public constructor(scope: Construct, id: string, config: IamtrustroleConfig) {
    super(scope, id, {
      terraformResourceType: 'alks_iamtrustrole',
      terraformGeneratorMetadata: {
        providerName: 'alks',
        providerVersion: '2.8.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._enableAlksAccess = config.enableAlksAccess;
    this._id = config.id;
    this._maxSessionDurationInSeconds = config.maxSessionDurationInSeconds;
    this._name = config.name;
    this._namePrefix = config.namePrefix;
    this._tags = config.tags;
    this._tagsAll = config.tagsAll;
    this._trustArn = config.trustArn;
    this._type = config.type;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // enable_alks_access - computed: false, optional: true, required: false
  private _enableAlksAccess?: boolean | cdktf.IResolvable; 
  public get enableAlksAccess() {
    return this.getBooleanAttribute('enable_alks_access');
  }
  public set enableAlksAccess(value: boolean | cdktf.IResolvable) {
    this._enableAlksAccess = value;
  }
  public resetEnableAlksAccess() {
    this._enableAlksAccess = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableAlksAccessInput() {
    return this._enableAlksAccess;
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

  // ip_arn - computed: true, optional: false, required: false
  public get ipArn() {
    return this.getStringAttribute('ip_arn');
  }

  // max_session_duration_in_seconds - computed: false, optional: true, required: false
  private _maxSessionDurationInSeconds?: number; 
  public get maxSessionDurationInSeconds() {
    return this.getNumberAttribute('max_session_duration_in_seconds');
  }
  public set maxSessionDurationInSeconds(value: number) {
    this._maxSessionDurationInSeconds = value;
  }
  public resetMaxSessionDurationInSeconds() {
    this._maxSessionDurationInSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxSessionDurationInSecondsInput() {
    return this._maxSessionDurationInSeconds;
  }

  // name - computed: true, optional: true, required: false
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

  // name_prefix - computed: true, optional: true, required: false
  private _namePrefix?: string; 
  public get namePrefix() {
    return this.getStringAttribute('name_prefix');
  }
  public set namePrefix(value: string) {
    this._namePrefix = value;
  }
  public resetNamePrefix() {
    this._namePrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namePrefixInput() {
    return this._namePrefix;
  }

  // role_added_to_ip - computed: true, optional: false, required: false
  public get roleAddedToIp() {
    return this.getBooleanAttribute('role_added_to_ip');
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

  // tags_all - computed: true, optional: true, required: false
  private _tagsAll?: { [key: string]: string }; 
  public get tagsAll() {
    return this.getStringMapAttribute('tags_all');
  }
  public set tagsAll(value: { [key: string]: string }) {
    this._tagsAll = value;
  }
  public resetTagsAll() {
    this._tagsAll = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsAllInput() {
    return this._tagsAll;
  }

  // trust_arn - computed: false, optional: false, required: true
  private _trustArn?: string; 
  public get trustArn() {
    return this.getStringAttribute('trust_arn');
  }
  public set trustArn(value: string) {
    this._trustArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get trustArnInput() {
    return this._trustArn;
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      enable_alks_access: cdktf.booleanToTerraform(this._enableAlksAccess),
      id: cdktf.stringToTerraform(this._id),
      max_session_duration_in_seconds: cdktf.numberToTerraform(this._maxSessionDurationInSeconds),
      name: cdktf.stringToTerraform(this._name),
      name_prefix: cdktf.stringToTerraform(this._namePrefix),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      tags_all: cdktf.hashMapper(cdktf.stringToTerraform)(this._tagsAll),
      trust_arn: cdktf.stringToTerraform(this._trustArn),
      type: cdktf.stringToTerraform(this._type),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      enable_alks_access: {
        value: cdktf.booleanToHclTerraform(this._enableAlksAccess),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      max_session_duration_in_seconds: {
        value: cdktf.numberToHclTerraform(this._maxSessionDurationInSeconds),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      name_prefix: {
        value: cdktf.stringToHclTerraform(this._namePrefix),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tags: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._tags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      tags_all: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._tagsAll),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      trust_arn: {
        value: cdktf.stringToHclTerraform(this._trustArn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      type: {
        value: cdktf.stringToHclTerraform(this._type),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
