// https://registry.terraform.io/providers/rubrikinc/polaris/1.3.0/docs/resources/tag_rule
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface TagRuleConfig extends cdktf.TerraformMetaArguments {
  /**
  * The RSC cloud account IDs (UUID) to which the tag rule should be applied. If empty, the tag rule will be applied to all RSC cloud accounts.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rubrikinc/polaris/1.3.0/docs/resources/tag_rule#cloud_account_ids TagRule#cloud_account_ids}
  */
  readonly cloudAccountIds?: string[];
  /**
  * Tag rule name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rubrikinc/polaris/1.3.0/docs/resources/tag_rule#name TagRule#name}
  */
  readonly name: string;
  /**
  * Object type to which the tag rule will be applied. Possible values are `AWS_EBS_VOLUME`, `AWS_EC2_INSTANCE`, `AWS_RDS_INSTANCE`, `AWS_S3_BUCKET`, `AWS_DYNAMODB_TABLE`, `AZURE_MANAGED_DISK`, `AZURE_SQL_DATABASE_DB`, `AZURE_SQL_DATABASE_SERVER`, `AZURE_SQL_MANAGED_INSTANCE_SERVER`, `AZURE_STORAGE_ACCOUNT` and `AZURE_VIRTUAL_MACHINE`. Changing this forces a new resource to be created.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rubrikinc/polaris/1.3.0/docs/resources/tag_rule#object_type TagRule#object_type}
  */
  readonly objectType: string;
  /**
  * If true, all tag values are matched. Changing this forces a new resource to be created.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rubrikinc/polaris/1.3.0/docs/resources/tag_rule#tag_all_values TagRule#tag_all_values}
  */
  readonly tagAllValues?: boolean | cdktf.IResolvable;
  /**
  * Tag key to match. Changing this forces a new resource to be created.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rubrikinc/polaris/1.3.0/docs/resources/tag_rule#tag_key TagRule#tag_key}
  */
  readonly tagKey: string;
  /**
  * Tag value to match. If the tag value is empty, it matches empty values. To match all tag values, use the `tag_all_values` field. Changing this forces a new resource to be created.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rubrikinc/polaris/1.3.0/docs/resources/tag_rule#tag_value TagRule#tag_value}
  */
  readonly tagValue?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/rubrikinc/polaris/1.3.0/docs/resources/tag_rule polaris_tag_rule}
*/
export class TagRule extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "polaris_tag_rule";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a TagRule resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the TagRule to import
  * @param importFromId The id of the existing TagRule that should be imported. Refer to the {@link https://registry.terraform.io/providers/rubrikinc/polaris/1.3.0/docs/resources/tag_rule#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the TagRule to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "polaris_tag_rule", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/rubrikinc/polaris/1.3.0/docs/resources/tag_rule polaris_tag_rule} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options TagRuleConfig
  */
  public constructor(scope: Construct, id: string, config: TagRuleConfig) {
    super(scope, id, {
      terraformResourceType: 'polaris_tag_rule',
      terraformGeneratorMetadata: {
        providerName: 'polaris',
        providerVersion: '1.3.0',
        providerVersionConstraint: '1.3.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._cloudAccountIds = config.cloudAccountIds;
    this._name = config.name;
    this._objectType = config.objectType;
    this._tagAllValues = config.tagAllValues;
    this._tagKey = config.tagKey;
    this._tagValue = config.tagValue;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cloud_account_ids - computed: false, optional: true, required: false
  private _cloudAccountIds?: string[]; 
  public get cloudAccountIds() {
    return cdktf.Fn.tolist(this.getListAttribute('cloud_account_ids'));
  }
  public set cloudAccountIds(value: string[]) {
    this._cloudAccountIds = value;
  }
  public resetCloudAccountIds() {
    this._cloudAccountIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudAccountIdsInput() {
    return this._cloudAccountIds;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
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

  // object_type - computed: false, optional: false, required: true
  private _objectType?: string; 
  public get objectType() {
    return this.getStringAttribute('object_type');
  }
  public set objectType(value: string) {
    this._objectType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get objectTypeInput() {
    return this._objectType;
  }

  // tag_all_values - computed: false, optional: true, required: false
  private _tagAllValues?: boolean | cdktf.IResolvable; 
  public get tagAllValues() {
    return this.getBooleanAttribute('tag_all_values');
  }
  public set tagAllValues(value: boolean | cdktf.IResolvable) {
    this._tagAllValues = value;
  }
  public resetTagAllValues() {
    this._tagAllValues = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagAllValuesInput() {
    return this._tagAllValues;
  }

  // tag_key - computed: false, optional: false, required: true
  private _tagKey?: string; 
  public get tagKey() {
    return this.getStringAttribute('tag_key');
  }
  public set tagKey(value: string) {
    this._tagKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tagKeyInput() {
    return this._tagKey;
  }

  // tag_value - computed: false, optional: true, required: false
  private _tagValue?: string; 
  public get tagValue() {
    return this.getStringAttribute('tag_value');
  }
  public set tagValue(value: string) {
    this._tagValue = value;
  }
  public resetTagValue() {
    this._tagValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagValueInput() {
    return this._tagValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      cloud_account_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._cloudAccountIds),
      name: cdktf.stringToTerraform(this._name),
      object_type: cdktf.stringToTerraform(this._objectType),
      tag_all_values: cdktf.booleanToTerraform(this._tagAllValues),
      tag_key: cdktf.stringToTerraform(this._tagKey),
      tag_value: cdktf.stringToTerraform(this._tagValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      cloud_account_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._cloudAccountIds),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      object_type: {
        value: cdktf.stringToHclTerraform(this._objectType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tag_all_values: {
        value: cdktf.booleanToHclTerraform(this._tagAllValues),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      tag_key: {
        value: cdktf.stringToHclTerraform(this._tagKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tag_value: {
        value: cdktf.stringToHclTerraform(this._tagValue),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
