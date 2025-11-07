// https://registry.terraform.io/providers/paloaltonetworks/cloudngfwaws/3.0.4/docs/data-sources/rulestack
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataCloudngfwawsRulestackConfig extends cdktf.TerraformMetaArguments {
  /**
  * Retrieve either the candidate or running config. Valid values are `candidate` or `running`. Defaults to `candidate`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/cloudngfwaws/3.0.4/docs/data-sources/rulestack#config_type DataCloudngfwawsRulestack#config_type}
  */
  readonly configType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/cloudngfwaws/3.0.4/docs/data-sources/rulestack#id DataCloudngfwawsRulestack#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/cloudngfwaws/3.0.4/docs/data-sources/rulestack#name DataCloudngfwawsRulestack#name}
  */
  readonly name: string;
  /**
  * The rulestack's scope. A local rulestack will require that you've retrieved a LRA JWT. A global rulestack will require that you've retrieved a GRA JWT. Valid values are `Local` or `Global`. Defaults to `Local`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/cloudngfwaws/3.0.4/docs/data-sources/rulestack#scope DataCloudngfwawsRulestack#scope}
  */
  readonly scope?: string;
}
export interface DataCloudngfwawsRulestackProfileConfig {
}

export function dataCloudngfwawsRulestackProfileConfigToTerraform(struct?: DataCloudngfwawsRulestackProfileConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCloudngfwawsRulestackProfileConfigToHclTerraform(struct?: DataCloudngfwawsRulestackProfileConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCloudngfwawsRulestackProfileConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataCloudngfwawsRulestackProfileConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCloudngfwawsRulestackProfileConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // anti_spyware - computed: true, optional: false, required: false
  public get antiSpyware() {
    return this.getStringAttribute('anti_spyware');
  }

  // anti_virus - computed: true, optional: false, required: false
  public get antiVirus() {
    return this.getStringAttribute('anti_virus');
  }

  // file_blocking - computed: true, optional: false, required: false
  public get fileBlocking() {
    return this.getStringAttribute('file_blocking');
  }

  // outbound_trust_certificate - computed: true, optional: false, required: false
  public get outboundTrustCertificate() {
    return this.getStringAttribute('outbound_trust_certificate');
  }

  // outbound_untrust_certificate - computed: true, optional: false, required: false
  public get outboundUntrustCertificate() {
    return this.getStringAttribute('outbound_untrust_certificate');
  }

  // url_filtering - computed: true, optional: false, required: false
  public get urlFiltering() {
    return this.getStringAttribute('url_filtering');
  }

  // vulnerability - computed: true, optional: false, required: false
  public get vulnerability() {
    return this.getStringAttribute('vulnerability');
  }
}

export class DataCloudngfwawsRulestackProfileConfigList extends cdktf.ComplexList {

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
  public get(index: number): DataCloudngfwawsRulestackProfileConfigOutputReference {
    return new DataCloudngfwawsRulestackProfileConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/paloaltonetworks/cloudngfwaws/3.0.4/docs/data-sources/rulestack cloudngfwaws_rulestack}
*/
export class DataCloudngfwawsRulestack extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "cloudngfwaws_rulestack";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataCloudngfwawsRulestack resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataCloudngfwawsRulestack to import
  * @param importFromId The id of the existing DataCloudngfwawsRulestack that should be imported. Refer to the {@link https://registry.terraform.io/providers/paloaltonetworks/cloudngfwaws/3.0.4/docs/data-sources/rulestack#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataCloudngfwawsRulestack to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudngfwaws_rulestack", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/paloaltonetworks/cloudngfwaws/3.0.4/docs/data-sources/rulestack cloudngfwaws_rulestack} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataCloudngfwawsRulestackConfig
  */
  public constructor(scope: Construct, id: string, config: DataCloudngfwawsRulestackConfig) {
    super(scope, id, {
      terraformResourceType: 'cloudngfwaws_rulestack',
      terraformGeneratorMetadata: {
        providerName: 'cloudngfwaws',
        providerVersion: '3.0.4'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._configType = config.configType;
    this._id = config.id;
    this._name = config.name;
    this._scope = config.scope;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // account_group - computed: true, optional: false, required: false
  public get accountGroup() {
    return this.getStringAttribute('account_group');
  }

  // account_id - computed: true, optional: false, required: false
  public get accountId() {
    return this.getStringAttribute('account_id');
  }

  // config_type - computed: false, optional: true, required: false
  private _configType?: string; 
  public get configType() {
    return this.getStringAttribute('config_type');
  }
  public set configType(value: string) {
    this._configType = value;
  }
  public resetConfigType() {
    this._configType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configTypeInput() {
    return this._configType;
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
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

  // lookup_x_forwarded_for - computed: true, optional: false, required: false
  public get lookupXForwardedFor() {
    return this.getStringAttribute('lookup_x_forwarded_for');
  }

  // minimum_app_id_version - computed: true, optional: false, required: false
  public get minimumAppIdVersion() {
    return this.getStringAttribute('minimum_app_id_version');
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

  // profile_config - computed: true, optional: false, required: false
  private _profileConfig = new DataCloudngfwawsRulestackProfileConfigList(this, "profile_config", false);
  public get profileConfig() {
    return this._profileConfig;
  }

  // scope - computed: false, optional: true, required: false
  private _scope?: string; 
  public get scope() {
    return this.getStringAttribute('scope');
  }
  public set scope(value: string) {
    this._scope = value;
  }
  public resetScope() {
    this._scope = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scopeInput() {
    return this._scope;
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // tags - computed: true, optional: false, required: false
  private _tags = new cdktf.StringMap(this, "tags");
  public get tags() {
    return this._tags;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      config_type: cdktf.stringToTerraform(this._configType),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      scope: cdktf.stringToTerraform(this._scope),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      config_type: {
        value: cdktf.stringToHclTerraform(this._configType),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      scope: {
        value: cdktf.stringToHclTerraform(this._scope),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
