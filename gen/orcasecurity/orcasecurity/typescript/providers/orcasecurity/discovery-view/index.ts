// https://registry.terraform.io/providers/orcasecurity/orcasecurity/0.0.27/docs/resources/discovery_view
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DiscoveryViewConfig extends cdktf.TerraformMetaArguments {
  /**
  * NOT YET IMPLEMENTED. Allows you to set a limit of returned results, amongst other things.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/orcasecurity/orcasecurity/0.0.27/docs/resources/discovery_view#extra_params DiscoveryView#extra_params}
  */
  readonly extraParams: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/orcasecurity/orcasecurity/0.0.27/docs/resources/discovery_view#filter_data DiscoveryView#filter_data}
  */
  readonly filterData: DiscoveryViewFilterData;
  /**
  * Discovery view name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/orcasecurity/orcasecurity/0.0.27/docs/resources/discovery_view#name DiscoveryView#name}
  */
  readonly name: string;
  /**
  * If set to true, it is is a shared discovery view (can be viewed by any member of your Orca org). If set to false, it is a personal discovery view (can be viewed only by you, not other members of your Orca org).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/orcasecurity/orcasecurity/0.0.27/docs/resources/discovery_view#organization_level DiscoveryView#organization_level}
  */
  readonly organizationLevel: boolean | cdktf.IResolvable;
  /**
  * Should be set to 'discovery' for discovery views.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/orcasecurity/orcasecurity/0.0.27/docs/resources/discovery_view#view_type DiscoveryView#view_type}
  */
  readonly viewType: string;
}
export interface DiscoveryViewFilterData {
  /**
  * Discovery query that will be created. Should be in JSON format.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/orcasecurity/orcasecurity/0.0.27/docs/resources/discovery_view#query DiscoveryView#query}
  */
  readonly query: string;
}

export function discoveryViewFilterDataToTerraform(struct?: DiscoveryViewFilterData | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    query: cdktf.stringToTerraform(struct!.query),
  }
}


export function discoveryViewFilterDataToHclTerraform(struct?: DiscoveryViewFilterData | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    query: {
      value: cdktf.stringToHclTerraform(struct!.query),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DiscoveryViewFilterDataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DiscoveryViewFilterData | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._query !== undefined) {
      hasAnyValues = true;
      internalValueResult.query = this._query;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DiscoveryViewFilterData | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._query = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._query = value.query;
    }
  }

  // query - computed: false, optional: false, required: true
  private _query?: string; 
  public get query() {
    return this.getStringAttribute('query');
  }
  public set query(value: string) {
    this._query = value;
  }
  // Temporarily expose input value. Use with caution.
  public get queryInput() {
    return this._query;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/orcasecurity/orcasecurity/0.0.27/docs/resources/discovery_view orcasecurity_discovery_view}
*/
export class DiscoveryView extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "orcasecurity_discovery_view";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DiscoveryView resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DiscoveryView to import
  * @param importFromId The id of the existing DiscoveryView that should be imported. Refer to the {@link https://registry.terraform.io/providers/orcasecurity/orcasecurity/0.0.27/docs/resources/discovery_view#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DiscoveryView to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "orcasecurity_discovery_view", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/orcasecurity/orcasecurity/0.0.27/docs/resources/discovery_view orcasecurity_discovery_view} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DiscoveryViewConfig
  */
  public constructor(scope: Construct, id: string, config: DiscoveryViewConfig) {
    super(scope, id, {
      terraformResourceType: 'orcasecurity_discovery_view',
      terraformGeneratorMetadata: {
        providerName: 'orcasecurity',
        providerVersion: '0.0.27',
        providerVersionConstraint: '0.0.27'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._extraParams = config.extraParams;
    this._filterData.internalValue = config.filterData;
    this._name = config.name;
    this._organizationLevel = config.organizationLevel;
    this._viewType = config.viewType;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // extra_params - computed: false, optional: false, required: true
  private _extraParams?: { [key: string]: string }; 
  public get extraParams() {
    return this.getStringMapAttribute('extra_params');
  }
  public set extraParams(value: { [key: string]: string }) {
    this._extraParams = value;
  }
  // Temporarily expose input value. Use with caution.
  public get extraParamsInput() {
    return this._extraParams;
  }

  // filter_data - computed: false, optional: false, required: true
  private _filterData = new DiscoveryViewFilterDataOutputReference(this, "filter_data");
  public get filterData() {
    return this._filterData;
  }
  public putFilterData(value: DiscoveryViewFilterData) {
    this._filterData.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get filterDataInput() {
    return this._filterData.internalValue;
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

  // organization_level - computed: false, optional: false, required: true
  private _organizationLevel?: boolean | cdktf.IResolvable; 
  public get organizationLevel() {
    return this.getBooleanAttribute('organization_level');
  }
  public set organizationLevel(value: boolean | cdktf.IResolvable) {
    this._organizationLevel = value;
  }
  // Temporarily expose input value. Use with caution.
  public get organizationLevelInput() {
    return this._organizationLevel;
  }

  // view_type - computed: false, optional: false, required: true
  private _viewType?: string; 
  public get viewType() {
    return this.getStringAttribute('view_type');
  }
  public set viewType(value: string) {
    this._viewType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get viewTypeInput() {
    return this._viewType;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      extra_params: cdktf.hashMapper(cdktf.stringToTerraform)(this._extraParams),
      filter_data: discoveryViewFilterDataToTerraform(this._filterData.internalValue),
      name: cdktf.stringToTerraform(this._name),
      organization_level: cdktf.booleanToTerraform(this._organizationLevel),
      view_type: cdktf.stringToTerraform(this._viewType),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      extra_params: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._extraParams),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      filter_data: {
        value: discoveryViewFilterDataToHclTerraform(this._filterData.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DiscoveryViewFilterData",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      organization_level: {
        value: cdktf.booleanToHclTerraform(this._organizationLevel),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      view_type: {
        value: cdktf.stringToHclTerraform(this._viewType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
