// https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/cloud_config_rule_associations
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CloudConfigRuleAssociationsConfig extends cdktf.TerraformMetaArguments {
  /**
  * List of cloud configuration rule IDs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/cloud_config_rule_associations#cloud_config_rule_ids CloudConfigRuleAssociations#cloud_config_rule_ids}
  */
  readonly cloudConfigRuleIds: string[];
  /**
  * Details of the association. This information is not used to manage resources but can serve as notes or documentation for the associations.
  *     - Defaults to `undefined`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/cloud_config_rule_associations#details CloudConfigRuleAssociations#details}
  */
  readonly details?: string;
  /**
  * List of security sub-category IDs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/cloud_config_rule_associations#security_sub_category_ids CloudConfigRuleAssociations#security_sub_category_ids}
  */
  readonly securitySubCategoryIds: string[];
}

/**
* Represents a {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/cloud_config_rule_associations wiz_cloud_config_rule_associations}
*/
export class CloudConfigRuleAssociations extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "wiz_cloud_config_rule_associations";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CloudConfigRuleAssociations resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CloudConfigRuleAssociations to import
  * @param importFromId The id of the existing CloudConfigRuleAssociations that should be imported. Refer to the {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/cloud_config_rule_associations#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CloudConfigRuleAssociations to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "wiz_cloud_config_rule_associations", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/cloud_config_rule_associations wiz_cloud_config_rule_associations} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CloudConfigRuleAssociationsConfig
  */
  public constructor(scope: Construct, id: string, config: CloudConfigRuleAssociationsConfig) {
    super(scope, id, {
      terraformResourceType: 'wiz_cloud_config_rule_associations',
      terraformGeneratorMetadata: {
        providerName: 'wiz',
        providerVersion: '1.2.5',
        providerVersionConstraint: '1.2.5'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._cloudConfigRuleIds = config.cloudConfigRuleIds;
    this._details = config.details;
    this._securitySubCategoryIds = config.securitySubCategoryIds;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cloud_config_rule_ids - computed: false, optional: false, required: true
  private _cloudConfigRuleIds?: string[]; 
  public get cloudConfigRuleIds() {
    return this.getListAttribute('cloud_config_rule_ids');
  }
  public set cloudConfigRuleIds(value: string[]) {
    this._cloudConfigRuleIds = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudConfigRuleIdsInput() {
    return this._cloudConfigRuleIds;
  }

  // details - computed: false, optional: true, required: false
  private _details?: string; 
  public get details() {
    return this.getStringAttribute('details');
  }
  public set details(value: string) {
    this._details = value;
  }
  public resetDetails() {
    this._details = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get detailsInput() {
    return this._details;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // security_sub_category_ids - computed: false, optional: false, required: true
  private _securitySubCategoryIds?: string[]; 
  public get securitySubCategoryIds() {
    return this.getListAttribute('security_sub_category_ids');
  }
  public set securitySubCategoryIds(value: string[]) {
    this._securitySubCategoryIds = value;
  }
  // Temporarily expose input value. Use with caution.
  public get securitySubCategoryIdsInput() {
    return this._securitySubCategoryIds;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      cloud_config_rule_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._cloudConfigRuleIds),
      details: cdktf.stringToTerraform(this._details),
      security_sub_category_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._securitySubCategoryIds),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      cloud_config_rule_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._cloudConfigRuleIds),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      details: {
        value: cdktf.stringToHclTerraform(this._details),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      security_sub_category_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._securitySubCategoryIds),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
