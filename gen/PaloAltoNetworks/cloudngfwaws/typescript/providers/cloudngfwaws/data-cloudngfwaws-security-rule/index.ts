// https://registry.terraform.io/providers/paloaltonetworks/cloudngfwaws/3.0.4/docs/data-sources/security_rule
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataCloudngfwawsSecurityRuleConfig extends cdktf.TerraformMetaArguments {
  /**
  * Retrieve either the candidate or running config. Valid values are `candidate` or `running`. Defaults to `candidate`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/cloudngfwaws/3.0.4/docs/data-sources/security_rule#config_type DataCloudngfwawsSecurityRule#config_type}
  */
  readonly configType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/cloudngfwaws/3.0.4/docs/data-sources/security_rule#id DataCloudngfwawsSecurityRule#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The rule priority.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/cloudngfwaws/3.0.4/docs/data-sources/security_rule#priority DataCloudngfwawsSecurityRule#priority}
  */
  readonly priority: number;
  /**
  * The rulebase. Valid values are `PreRule`, `PostRule`, or `LocalRule`. Defaults to `PreRule`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/cloudngfwaws/3.0.4/docs/data-sources/security_rule#rule_list DataCloudngfwawsSecurityRule#rule_list}
  */
  readonly ruleList?: string;
  /**
  * The rulestack.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/cloudngfwaws/3.0.4/docs/data-sources/security_rule#rulestack DataCloudngfwawsSecurityRule#rulestack}
  */
  readonly rulestack: string;
  /**
  * The rulestack's scope. A local rulestack will require that you've retrieved a LRA JWT. A global rulestack will require that you've retrieved a GRA JWT. Valid values are `Local` or `Global`. Defaults to `Local`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/cloudngfwaws/3.0.4/docs/data-sources/security_rule#scope DataCloudngfwawsSecurityRule#scope}
  */
  readonly scope?: string;
}
export interface DataCloudngfwawsSecurityRuleCategory {
}

export function dataCloudngfwawsSecurityRuleCategoryToTerraform(struct?: DataCloudngfwawsSecurityRuleCategory): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCloudngfwawsSecurityRuleCategoryToHclTerraform(struct?: DataCloudngfwawsSecurityRuleCategory): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCloudngfwawsSecurityRuleCategoryOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataCloudngfwawsSecurityRuleCategory | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCloudngfwawsSecurityRuleCategory | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // feeds - computed: true, optional: false, required: false
  public get feeds() {
    return cdktf.Fn.tolist(this.getListAttribute('feeds'));
  }

  // url_category_names - computed: true, optional: false, required: false
  public get urlCategoryNames() {
    return cdktf.Fn.tolist(this.getListAttribute('url_category_names'));
  }
}

export class DataCloudngfwawsSecurityRuleCategoryList extends cdktf.ComplexList {

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
  public get(index: number): DataCloudngfwawsSecurityRuleCategoryOutputReference {
    return new DataCloudngfwawsSecurityRuleCategoryOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataCloudngfwawsSecurityRuleDestination {
}

export function dataCloudngfwawsSecurityRuleDestinationToTerraform(struct?: DataCloudngfwawsSecurityRuleDestination): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCloudngfwawsSecurityRuleDestinationToHclTerraform(struct?: DataCloudngfwawsSecurityRuleDestination): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCloudngfwawsSecurityRuleDestinationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataCloudngfwawsSecurityRuleDestination | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCloudngfwawsSecurityRuleDestination | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // cidrs - computed: true, optional: false, required: false
  public get cidrs() {
    return cdktf.Fn.tolist(this.getListAttribute('cidrs'));
  }

  // countries - computed: true, optional: false, required: false
  public get countries() {
    return cdktf.Fn.tolist(this.getListAttribute('countries'));
  }

  // feeds - computed: true, optional: false, required: false
  public get feeds() {
    return cdktf.Fn.tolist(this.getListAttribute('feeds'));
  }

  // fqdn_lists - computed: true, optional: false, required: false
  public get fqdnLists() {
    return cdktf.Fn.tolist(this.getListAttribute('fqdn_lists'));
  }

  // prefix_lists - computed: true, optional: false, required: false
  public get prefixLists() {
    return cdktf.Fn.tolist(this.getListAttribute('prefix_lists'));
  }
}

export class DataCloudngfwawsSecurityRuleDestinationList extends cdktf.ComplexList {

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
  public get(index: number): DataCloudngfwawsSecurityRuleDestinationOutputReference {
    return new DataCloudngfwawsSecurityRuleDestinationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataCloudngfwawsSecurityRuleSource {
}

export function dataCloudngfwawsSecurityRuleSourceToTerraform(struct?: DataCloudngfwawsSecurityRuleSource): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCloudngfwawsSecurityRuleSourceToHclTerraform(struct?: DataCloudngfwawsSecurityRuleSource): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCloudngfwawsSecurityRuleSourceOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataCloudngfwawsSecurityRuleSource | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCloudngfwawsSecurityRuleSource | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // cidrs - computed: true, optional: false, required: false
  public get cidrs() {
    return cdktf.Fn.tolist(this.getListAttribute('cidrs'));
  }

  // countries - computed: true, optional: false, required: false
  public get countries() {
    return cdktf.Fn.tolist(this.getListAttribute('countries'));
  }

  // feeds - computed: true, optional: false, required: false
  public get feeds() {
    return cdktf.Fn.tolist(this.getListAttribute('feeds'));
  }

  // prefix_lists - computed: true, optional: false, required: false
  public get prefixLists() {
    return cdktf.Fn.tolist(this.getListAttribute('prefix_lists'));
  }
}

export class DataCloudngfwawsSecurityRuleSourceList extends cdktf.ComplexList {

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
  public get(index: number): DataCloudngfwawsSecurityRuleSourceOutputReference {
    return new DataCloudngfwawsSecurityRuleSourceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/paloaltonetworks/cloudngfwaws/3.0.4/docs/data-sources/security_rule cloudngfwaws_security_rule}
*/
export class DataCloudngfwawsSecurityRule extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "cloudngfwaws_security_rule";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataCloudngfwawsSecurityRule resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataCloudngfwawsSecurityRule to import
  * @param importFromId The id of the existing DataCloudngfwawsSecurityRule that should be imported. Refer to the {@link https://registry.terraform.io/providers/paloaltonetworks/cloudngfwaws/3.0.4/docs/data-sources/security_rule#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataCloudngfwawsSecurityRule to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudngfwaws_security_rule", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/paloaltonetworks/cloudngfwaws/3.0.4/docs/data-sources/security_rule cloudngfwaws_security_rule} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataCloudngfwawsSecurityRuleConfig
  */
  public constructor(scope: Construct, id: string, config: DataCloudngfwawsSecurityRuleConfig) {
    super(scope, id, {
      terraformResourceType: 'cloudngfwaws_security_rule',
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
    this._priority = config.priority;
    this._ruleList = config.ruleList;
    this._rulestack = config.rulestack;
    this._scope = config.scope;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // action - computed: true, optional: false, required: false
  public get action() {
    return this.getStringAttribute('action');
  }

  // applications - computed: true, optional: false, required: false
  public get applications() {
    return cdktf.Fn.tolist(this.getListAttribute('applications'));
  }

  // audit_comment - computed: true, optional: false, required: false
  public get auditComment() {
    return this.getStringAttribute('audit_comment');
  }

  // category - computed: true, optional: false, required: false
  private _category = new DataCloudngfwawsSecurityRuleCategoryList(this, "category", false);
  public get category() {
    return this._category;
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

  // decryption_rule_type - computed: true, optional: false, required: false
  public get decryptionRuleType() {
    return this.getStringAttribute('decryption_rule_type');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // destination - computed: true, optional: false, required: false
  private _destination = new DataCloudngfwawsSecurityRuleDestinationList(this, "destination", false);
  public get destination() {
    return this._destination;
  }

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
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

  // logging - computed: true, optional: false, required: false
  public get logging() {
    return this.getBooleanAttribute('logging');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // negate_destination - computed: true, optional: false, required: false
  public get negateDestination() {
    return this.getBooleanAttribute('negate_destination');
  }

  // negate_source - computed: true, optional: false, required: false
  public get negateSource() {
    return this.getBooleanAttribute('negate_source');
  }

  // priority - computed: false, optional: false, required: true
  private _priority?: number; 
  public get priority() {
    return this.getNumberAttribute('priority');
  }
  public set priority(value: number) {
    this._priority = value;
  }
  // Temporarily expose input value. Use with caution.
  public get priorityInput() {
    return this._priority;
  }

  // prot_port_list - computed: true, optional: false, required: false
  public get protPortList() {
    return cdktf.Fn.tolist(this.getListAttribute('prot_port_list'));
  }

  // protocol - computed: true, optional: false, required: false
  public get protocol() {
    return this.getStringAttribute('protocol');
  }

  // rule_list - computed: false, optional: true, required: false
  private _ruleList?: string; 
  public get ruleList() {
    return this.getStringAttribute('rule_list');
  }
  public set ruleList(value: string) {
    this._ruleList = value;
  }
  public resetRuleList() {
    this._ruleList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleListInput() {
    return this._ruleList;
  }

  // rulestack - computed: false, optional: false, required: true
  private _rulestack?: string; 
  public get rulestack() {
    return this.getStringAttribute('rulestack');
  }
  public set rulestack(value: string) {
    this._rulestack = value;
  }
  // Temporarily expose input value. Use with caution.
  public get rulestackInput() {
    return this._rulestack;
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

  // source - computed: true, optional: false, required: false
  private _source = new DataCloudngfwawsSecurityRuleSourceList(this, "source", false);
  public get source() {
    return this._source;
  }

  // tags - computed: true, optional: false, required: false
  private _tags = new cdktf.StringMap(this, "tags");
  public get tags() {
    return this._tags;
  }

  // update_token - computed: true, optional: false, required: false
  public get updateToken() {
    return this.getStringAttribute('update_token');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      config_type: cdktf.stringToTerraform(this._configType),
      id: cdktf.stringToTerraform(this._id),
      priority: cdktf.numberToTerraform(this._priority),
      rule_list: cdktf.stringToTerraform(this._ruleList),
      rulestack: cdktf.stringToTerraform(this._rulestack),
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
      priority: {
        value: cdktf.numberToHclTerraform(this._priority),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      rule_list: {
        value: cdktf.stringToHclTerraform(this._ruleList),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      rulestack: {
        value: cdktf.stringToHclTerraform(this._rulestack),
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
