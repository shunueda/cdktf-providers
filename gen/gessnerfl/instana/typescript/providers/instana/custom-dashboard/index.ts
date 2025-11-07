// https://registry.terraform.io/providers/gessnerfl/instana/3.0.0/docs/resources/custom_dashboard
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CustomDashboardConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gessnerfl/instana/3.0.0/docs/resources/custom_dashboard#id CustomDashboard#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The title of the custom dashboard
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gessnerfl/instana/3.0.0/docs/resources/custom_dashboard#title CustomDashboard#title}
  */
  readonly title: string;
  /**
  * The json array containing the widgets configured for the custom dashboard
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gessnerfl/instana/3.0.0/docs/resources/custom_dashboard#widgets CustomDashboard#widgets}
  */
  readonly widgets: string;
  /**
  * access_rule block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gessnerfl/instana/3.0.0/docs/resources/custom_dashboard#access_rule CustomDashboard#access_rule}
  */
  readonly accessRule: CustomDashboardAccessRule[] | cdktf.IResolvable;
}
export interface CustomDashboardAccessRule {
  /**
  * The access type of the given access rule
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gessnerfl/instana/3.0.0/docs/resources/custom_dashboard#access_type CustomDashboard#access_type}
  */
  readonly accessType: string;
  /**
  * The id of the related entity (user, api_token, etc.) of the given access rule
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gessnerfl/instana/3.0.0/docs/resources/custom_dashboard#related_id CustomDashboard#related_id}
  */
  readonly relatedId?: string;
  /**
  * The relation type of the given access rule
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gessnerfl/instana/3.0.0/docs/resources/custom_dashboard#relation_type CustomDashboard#relation_type}
  */
  readonly relationType: string;
}

export function customDashboardAccessRuleToTerraform(struct?: CustomDashboardAccessRule | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    access_type: cdktf.stringToTerraform(struct!.accessType),
    related_id: cdktf.stringToTerraform(struct!.relatedId),
    relation_type: cdktf.stringToTerraform(struct!.relationType),
  }
}


export function customDashboardAccessRuleToHclTerraform(struct?: CustomDashboardAccessRule | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    access_type: {
      value: cdktf.stringToHclTerraform(struct!.accessType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    related_id: {
      value: cdktf.stringToHclTerraform(struct!.relatedId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    relation_type: {
      value: cdktf.stringToHclTerraform(struct!.relationType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CustomDashboardAccessRuleOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CustomDashboardAccessRule | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accessType !== undefined) {
      hasAnyValues = true;
      internalValueResult.accessType = this._accessType;
    }
    if (this._relatedId !== undefined) {
      hasAnyValues = true;
      internalValueResult.relatedId = this._relatedId;
    }
    if (this._relationType !== undefined) {
      hasAnyValues = true;
      internalValueResult.relationType = this._relationType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CustomDashboardAccessRule | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._accessType = undefined;
      this._relatedId = undefined;
      this._relationType = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._accessType = value.accessType;
      this._relatedId = value.relatedId;
      this._relationType = value.relationType;
    }
  }

  // access_type - computed: false, optional: false, required: true
  private _accessType?: string; 
  public get accessType() {
    return this.getStringAttribute('access_type');
  }
  public set accessType(value: string) {
    this._accessType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get accessTypeInput() {
    return this._accessType;
  }

  // related_id - computed: false, optional: true, required: false
  private _relatedId?: string; 
  public get relatedId() {
    return this.getStringAttribute('related_id');
  }
  public set relatedId(value: string) {
    this._relatedId = value;
  }
  public resetRelatedId() {
    this._relatedId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get relatedIdInput() {
    return this._relatedId;
  }

  // relation_type - computed: false, optional: false, required: true
  private _relationType?: string; 
  public get relationType() {
    return this.getStringAttribute('relation_type');
  }
  public set relationType(value: string) {
    this._relationType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get relationTypeInput() {
    return this._relationType;
  }
}

export class CustomDashboardAccessRuleList extends cdktf.ComplexList {
  public internalValue? : CustomDashboardAccessRule[] | cdktf.IResolvable

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
  public get(index: number): CustomDashboardAccessRuleOutputReference {
    return new CustomDashboardAccessRuleOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/gessnerfl/instana/3.0.0/docs/resources/custom_dashboard instana_custom_dashboard}
*/
export class CustomDashboard extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "instana_custom_dashboard";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CustomDashboard resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CustomDashboard to import
  * @param importFromId The id of the existing CustomDashboard that should be imported. Refer to the {@link https://registry.terraform.io/providers/gessnerfl/instana/3.0.0/docs/resources/custom_dashboard#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CustomDashboard to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "instana_custom_dashboard", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/gessnerfl/instana/3.0.0/docs/resources/custom_dashboard instana_custom_dashboard} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CustomDashboardConfig
  */
  public constructor(scope: Construct, id: string, config: CustomDashboardConfig) {
    super(scope, id, {
      terraformResourceType: 'instana_custom_dashboard',
      terraformGeneratorMetadata: {
        providerName: 'instana',
        providerVersion: '3.0.0'
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
    this._title = config.title;
    this._widgets = config.widgets;
    this._accessRule.internalValue = config.accessRule;
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

  // title - computed: false, optional: false, required: true
  private _title?: string; 
  public get title() {
    return this.getStringAttribute('title');
  }
  public set title(value: string) {
    this._title = value;
  }
  // Temporarily expose input value. Use with caution.
  public get titleInput() {
    return this._title;
  }

  // widgets - computed: false, optional: false, required: true
  private _widgets?: string; 
  public get widgets() {
    return this.getStringAttribute('widgets');
  }
  public set widgets(value: string) {
    this._widgets = value;
  }
  // Temporarily expose input value. Use with caution.
  public get widgetsInput() {
    return this._widgets;
  }

  // access_rule - computed: false, optional: false, required: true
  private _accessRule = new CustomDashboardAccessRuleList(this, "access_rule", false);
  public get accessRule() {
    return this._accessRule;
  }
  public putAccessRule(value: CustomDashboardAccessRule[] | cdktf.IResolvable) {
    this._accessRule.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get accessRuleInput() {
    return this._accessRule.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      title: cdktf.stringToTerraform(this._title),
      widgets: cdktf.stringToTerraform(this._widgets),
      access_rule: cdktf.listMapper(customDashboardAccessRuleToTerraform, true)(this._accessRule.internalValue),
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
      title: {
        value: cdktf.stringToHclTerraform(this._title),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      widgets: {
        value: cdktf.stringToHclTerraform(this._widgets),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      access_rule: {
        value: cdktf.listMapperHcl(customDashboardAccessRuleToHclTerraform, true)(this._accessRule.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CustomDashboardAccessRuleList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
