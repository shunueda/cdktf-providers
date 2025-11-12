// https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/dashboards_allowlist
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DashboardsAllowlistConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/dashboards_allowlist#id DashboardsAllowlist#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * allowlist block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/dashboards_allowlist#allowlist DashboardsAllowlist#allowlist}
  */
  readonly allowlist?: DashboardsAllowlistAllowlistStruct;
}
export interface DashboardsAllowlistAllowlistUrlpattern {
  /**
  * Possible Values: `Equals`, `StartsWith`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/dashboards_allowlist#rule DashboardsAllowlist#rule}
  */
  readonly rule: string;
  /**
  * Pattern
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/dashboards_allowlist#template DashboardsAllowlist#template}
  */
  readonly template: string;
}

export function dashboardsAllowlistAllowlistUrlpatternToTerraform(struct?: DashboardsAllowlistAllowlistUrlpattern | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    rule: cdktf.stringToTerraform(struct!.rule),
    template: cdktf.stringToTerraform(struct!.template),
  }
}


export function dashboardsAllowlistAllowlistUrlpatternToHclTerraform(struct?: DashboardsAllowlistAllowlistUrlpattern | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    rule: {
      value: cdktf.stringToHclTerraform(struct!.rule),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    template: {
      value: cdktf.stringToHclTerraform(struct!.template),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DashboardsAllowlistAllowlistUrlpatternOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DashboardsAllowlistAllowlistUrlpattern | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._rule !== undefined) {
      hasAnyValues = true;
      internalValueResult.rule = this._rule;
    }
    if (this._template !== undefined) {
      hasAnyValues = true;
      internalValueResult.template = this._template;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DashboardsAllowlistAllowlistUrlpattern | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._rule = undefined;
      this._template = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._rule = value.rule;
      this._template = value.template;
    }
  }

  // rule - computed: false, optional: false, required: true
  private _rule?: string; 
  public get rule() {
    return this.getStringAttribute('rule');
  }
  public set rule(value: string) {
    this._rule = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleInput() {
    return this._rule;
  }

  // template - computed: false, optional: false, required: true
  private _template?: string; 
  public get template() {
    return this.getStringAttribute('template');
  }
  public set template(value: string) {
    this._template = value;
  }
  // Temporarily expose input value. Use with caution.
  public get templateInput() {
    return this._template;
  }
}

export class DashboardsAllowlistAllowlistUrlpatternList extends cdktf.ComplexList {
  public internalValue? : DashboardsAllowlistAllowlistUrlpattern[] | cdktf.IResolvable

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
  public get(index: number): DashboardsAllowlistAllowlistUrlpatternOutputReference {
    return new DashboardsAllowlistAllowlistUrlpatternOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DashboardsAllowlistAllowlistStruct {
  /**
  * urlpattern block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/dashboards_allowlist#urlpattern DashboardsAllowlist#urlpattern}
  */
  readonly urlpattern: DashboardsAllowlistAllowlistUrlpattern[] | cdktf.IResolvable;
}

export function dashboardsAllowlistAllowlistStructToTerraform(struct?: DashboardsAllowlistAllowlistStructOutputReference | DashboardsAllowlistAllowlistStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    urlpattern: cdktf.listMapper(dashboardsAllowlistAllowlistUrlpatternToTerraform, true)(struct!.urlpattern),
  }
}


export function dashboardsAllowlistAllowlistStructToHclTerraform(struct?: DashboardsAllowlistAllowlistStructOutputReference | DashboardsAllowlistAllowlistStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    urlpattern: {
      value: cdktf.listMapperHcl(dashboardsAllowlistAllowlistUrlpatternToHclTerraform, true)(struct!.urlpattern),
      isBlock: true,
      type: "set",
      storageClassType: "DashboardsAllowlistAllowlistUrlpatternList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DashboardsAllowlistAllowlistStructOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DashboardsAllowlistAllowlistStruct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._urlpattern?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.urlpattern = this._urlpattern?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DashboardsAllowlistAllowlistStruct | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._urlpattern.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._urlpattern.internalValue = value.urlpattern;
    }
  }

  // urlpattern - computed: false, optional: false, required: true
  private _urlpattern = new DashboardsAllowlistAllowlistUrlpatternList(this, "urlpattern", true);
  public get urlpattern() {
    return this._urlpattern;
  }
  public putUrlpattern(value: DashboardsAllowlistAllowlistUrlpattern[] | cdktf.IResolvable) {
    this._urlpattern.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get urlpatternInput() {
    return this._urlpattern.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/dashboards_allowlist dynatrace_dashboards_allowlist}
*/
export class DashboardsAllowlist extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "dynatrace_dashboards_allowlist";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DashboardsAllowlist resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DashboardsAllowlist to import
  * @param importFromId The id of the existing DashboardsAllowlist that should be imported. Refer to the {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/dashboards_allowlist#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DashboardsAllowlist to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "dynatrace_dashboards_allowlist", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/dashboards_allowlist dynatrace_dashboards_allowlist} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DashboardsAllowlistConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DashboardsAllowlistConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'dynatrace_dashboards_allowlist',
      terraformGeneratorMetadata: {
        providerName: 'dynatrace',
        providerVersion: '1.87.1',
        providerVersionConstraint: '1.87.1'
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
    this._allowlist.internalValue = config.allowlist;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // allowlist - computed: false, optional: true, required: false
  private _allowlist = new DashboardsAllowlistAllowlistStructOutputReference(this, "allowlist");
  public get allowlist() {
    return this._allowlist;
  }
  public putAllowlist(value: DashboardsAllowlistAllowlistStruct) {
    this._allowlist.internalValue = value;
  }
  public resetAllowlist() {
    this._allowlist.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowlistInput() {
    return this._allowlist.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      allowlist: dashboardsAllowlistAllowlistStructToTerraform(this._allowlist.internalValue),
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
      allowlist: {
        value: dashboardsAllowlistAllowlistStructToHclTerraform(this._allowlist.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DashboardsAllowlistAllowlistStructList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
