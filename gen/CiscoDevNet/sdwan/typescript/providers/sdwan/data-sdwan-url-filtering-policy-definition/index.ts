// https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/data-sources/url_filtering_policy_definition
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataSdwanUrlFilteringPolicyDefinitionConfig extends cdktf.TerraformMetaArguments {
  /**
  * The id of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/data-sources/url_filtering_policy_definition#id DataSdwanUrlFilteringPolicyDefinition#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}
export interface DataSdwanUrlFilteringPolicyDefinitionLogging {
}

export function dataSdwanUrlFilteringPolicyDefinitionLoggingToTerraform(struct?: DataSdwanUrlFilteringPolicyDefinitionLogging): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSdwanUrlFilteringPolicyDefinitionLoggingToHclTerraform(struct?: DataSdwanUrlFilteringPolicyDefinitionLogging): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSdwanUrlFilteringPolicyDefinitionLoggingOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataSdwanUrlFilteringPolicyDefinitionLogging | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSdwanUrlFilteringPolicyDefinitionLogging | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // external_syslog_server_ip - computed: true, optional: false, required: false
  public get externalSyslogServerIp() {
    return this.getStringAttribute('external_syslog_server_ip');
  }

  // external_syslog_server_vpn - computed: true, optional: false, required: false
  public get externalSyslogServerVpn() {
    return this.getStringAttribute('external_syslog_server_vpn');
  }
}

export class DataSdwanUrlFilteringPolicyDefinitionLoggingList extends cdktf.ComplexList {

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
  public get(index: number): DataSdwanUrlFilteringPolicyDefinitionLoggingOutputReference {
    return new DataSdwanUrlFilteringPolicyDefinitionLoggingOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/data-sources/url_filtering_policy_definition sdwan_url_filtering_policy_definition}
*/
export class DataSdwanUrlFilteringPolicyDefinition extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "sdwan_url_filtering_policy_definition";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataSdwanUrlFilteringPolicyDefinition resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataSdwanUrlFilteringPolicyDefinition to import
  * @param importFromId The id of the existing DataSdwanUrlFilteringPolicyDefinition that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/data-sources/url_filtering_policy_definition#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataSdwanUrlFilteringPolicyDefinition to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "sdwan_url_filtering_policy_definition", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/data-sources/url_filtering_policy_definition sdwan_url_filtering_policy_definition} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataSdwanUrlFilteringPolicyDefinitionConfig
  */
  public constructor(scope: Construct, id: string, config: DataSdwanUrlFilteringPolicyDefinitionConfig) {
    super(scope, id, {
      terraformResourceType: 'sdwan_url_filtering_policy_definition',
      terraformGeneratorMetadata: {
        providerName: 'sdwan',
        providerVersion: '0.8.1',
        providerVersionConstraint: '0.8.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._id = config.id;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // alerts - computed: true, optional: false, required: false
  public get alerts() {
    return cdktf.Fn.tolist(this.getListAttribute('alerts'));
  }

  // allow_url_list_id - computed: true, optional: false, required: false
  public get allowUrlListId() {
    return this.getStringAttribute('allow_url_list_id');
  }

  // allow_url_list_version - computed: true, optional: false, required: false
  public get allowUrlListVersion() {
    return this.getNumberAttribute('allow_url_list_version');
  }

  // block_page_action - computed: true, optional: false, required: false
  public get blockPageAction() {
    return this.getStringAttribute('block_page_action');
  }

  // block_page_contents - computed: true, optional: false, required: false
  public get blockPageContents() {
    return this.getStringAttribute('block_page_contents');
  }

  // block_url_list_id - computed: true, optional: false, required: false
  public get blockUrlListId() {
    return this.getStringAttribute('block_url_list_id');
  }

  // block_url_list_version - computed: true, optional: false, required: false
  public get blockUrlListVersion() {
    return this.getNumberAttribute('block_url_list_version');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // id - computed: false, optional: false, required: true
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // logging - computed: true, optional: false, required: false
  private _logging = new DataSdwanUrlFilteringPolicyDefinitionLoggingList(this, "logging", false);
  public get logging() {
    return this._logging;
  }

  // mode - computed: true, optional: false, required: false
  public get mode() {
    return this.getStringAttribute('mode');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // target_vpns - computed: true, optional: false, required: false
  public get targetVpns() {
    return cdktf.Fn.tolist(this.getListAttribute('target_vpns'));
  }

  // version - computed: true, optional: false, required: false
  public get version() {
    return this.getNumberAttribute('version');
  }

  // web_categories - computed: true, optional: false, required: false
  public get webCategories() {
    return cdktf.Fn.tolist(this.getListAttribute('web_categories'));
  }

  // web_categories_action - computed: true, optional: false, required: false
  public get webCategoriesAction() {
    return this.getStringAttribute('web_categories_action');
  }

  // web_reputation - computed: true, optional: false, required: false
  public get webReputation() {
    return this.getStringAttribute('web_reputation');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
