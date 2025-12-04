// https://registry.terraform.io/providers/zscaler/zpa/4.3.4/docs/resources/application_segment_weightedlb_config
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ApplicationSegmentWeightedlbConfigConfig extends cdktf.TerraformMetaArguments {
  /**
  * Application segment identifier to manage. Either application_id or application_name must be provided.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zpa/4.3.4/docs/resources/application_segment_weightedlb_config#application_id ApplicationSegmentWeightedlbConfig#application_id}
  */
  readonly applicationId?: string;
  /**
  * Application segment name to manage. Either application_id or application_name must be provided.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zpa/4.3.4/docs/resources/application_segment_weightedlb_config#application_name ApplicationSegmentWeightedlbConfig#application_name}
  */
  readonly applicationName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zpa/4.3.4/docs/resources/application_segment_weightedlb_config#id ApplicationSegmentWeightedlbConfig#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Optional microtenant identifier.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zpa/4.3.4/docs/resources/application_segment_weightedlb_config#microtenant_id ApplicationSegmentWeightedlbConfig#microtenant_id}
  */
  readonly microtenantId?: string;
  /**
  * Enable or disable weighted load balancing for the application segment.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zpa/4.3.4/docs/resources/application_segment_weightedlb_config#weighted_load_balancing ApplicationSegmentWeightedlbConfig#weighted_load_balancing}
  */
  readonly weightedLoadBalancing?: boolean | cdktf.IResolvable;
  /**
  * application_to_server_group_mappings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zpa/4.3.4/docs/resources/application_segment_weightedlb_config#application_to_server_group_mappings ApplicationSegmentWeightedlbConfig#application_to_server_group_mappings}
  */
  readonly applicationToServerGroupMappings?: ApplicationSegmentWeightedlbConfigApplicationToServerGroupMappings[] | cdktf.IResolvable;
}
export interface ApplicationSegmentWeightedlbConfigApplicationToServerGroupMappings {
  /**
  * Server group mapping identifier.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zpa/4.3.4/docs/resources/application_segment_weightedlb_config#id ApplicationSegmentWeightedlbConfig#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Server group name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zpa/4.3.4/docs/resources/application_segment_weightedlb_config#name ApplicationSegmentWeightedlbConfig#name}
  */
  readonly name?: string;
  /**
  * Whether the server group is passive.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zpa/4.3.4/docs/resources/application_segment_weightedlb_config#passive ApplicationSegmentWeightedlbConfig#passive}
  */
  readonly passive?: boolean | cdktf.IResolvable;
  /**
  * Assigned weight for the server group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zpa/4.3.4/docs/resources/application_segment_weightedlb_config#weight ApplicationSegmentWeightedlbConfig#weight}
  */
  readonly weight?: string;
}

export function applicationSegmentWeightedlbConfigApplicationToServerGroupMappingsToTerraform(struct?: ApplicationSegmentWeightedlbConfigApplicationToServerGroupMappings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
    name: cdktf.stringToTerraform(struct!.name),
    passive: cdktf.booleanToTerraform(struct!.passive),
    weight: cdktf.stringToTerraform(struct!.weight),
  }
}


export function applicationSegmentWeightedlbConfigApplicationToServerGroupMappingsToHclTerraform(struct?: ApplicationSegmentWeightedlbConfigApplicationToServerGroupMappings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    passive: {
      value: cdktf.booleanToHclTerraform(struct!.passive),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    weight: {
      value: cdktf.stringToHclTerraform(struct!.weight),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApplicationSegmentWeightedlbConfigApplicationToServerGroupMappingsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ApplicationSegmentWeightedlbConfigApplicationToServerGroupMappings | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._passive !== undefined) {
      hasAnyValues = true;
      internalValueResult.passive = this._passive;
    }
    if (this._weight !== undefined) {
      hasAnyValues = true;
      internalValueResult.weight = this._weight;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApplicationSegmentWeightedlbConfigApplicationToServerGroupMappings | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
      this._name = undefined;
      this._passive = undefined;
      this._weight = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._id = value.id;
      this._name = value.name;
      this._passive = value.passive;
      this._weight = value.weight;
    }
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

  // passive - computed: true, optional: true, required: false
  private _passive?: boolean | cdktf.IResolvable; 
  public get passive() {
    return this.getBooleanAttribute('passive');
  }
  public set passive(value: boolean | cdktf.IResolvable) {
    this._passive = value;
  }
  public resetPassive() {
    this._passive = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passiveInput() {
    return this._passive;
  }

  // weight - computed: true, optional: true, required: false
  private _weight?: string; 
  public get weight() {
    return this.getStringAttribute('weight');
  }
  public set weight(value: string) {
    this._weight = value;
  }
  public resetWeight() {
    this._weight = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get weightInput() {
    return this._weight;
  }
}

export class ApplicationSegmentWeightedlbConfigApplicationToServerGroupMappingsList extends cdktf.ComplexList {
  public internalValue? : ApplicationSegmentWeightedlbConfigApplicationToServerGroupMappings[] | cdktf.IResolvable

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
  public get(index: number): ApplicationSegmentWeightedlbConfigApplicationToServerGroupMappingsOutputReference {
    return new ApplicationSegmentWeightedlbConfigApplicationToServerGroupMappingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/zscaler/zpa/4.3.4/docs/resources/application_segment_weightedlb_config zpa_application_segment_weightedlb_config}
*/
export class ApplicationSegmentWeightedlbConfig extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "zpa_application_segment_weightedlb_config";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ApplicationSegmentWeightedlbConfig resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ApplicationSegmentWeightedlbConfig to import
  * @param importFromId The id of the existing ApplicationSegmentWeightedlbConfig that should be imported. Refer to the {@link https://registry.terraform.io/providers/zscaler/zpa/4.3.4/docs/resources/application_segment_weightedlb_config#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ApplicationSegmentWeightedlbConfig to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "zpa_application_segment_weightedlb_config", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/zscaler/zpa/4.3.4/docs/resources/application_segment_weightedlb_config zpa_application_segment_weightedlb_config} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ApplicationSegmentWeightedlbConfigConfig = {}
  */
  public constructor(scope: Construct, id: string, config: ApplicationSegmentWeightedlbConfigConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'zpa_application_segment_weightedlb_config',
      terraformGeneratorMetadata: {
        providerName: 'zpa',
        providerVersion: '4.3.4',
        providerVersionConstraint: '4.3.4'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._applicationId = config.applicationId;
    this._applicationName = config.applicationName;
    this._id = config.id;
    this._microtenantId = config.microtenantId;
    this._weightedLoadBalancing = config.weightedLoadBalancing;
    this._applicationToServerGroupMappings.internalValue = config.applicationToServerGroupMappings;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // application_id - computed: true, optional: true, required: false
  private _applicationId?: string; 
  public get applicationId() {
    return this.getStringAttribute('application_id');
  }
  public set applicationId(value: string) {
    this._applicationId = value;
  }
  public resetApplicationId() {
    this._applicationId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get applicationIdInput() {
    return this._applicationId;
  }

  // application_name - computed: true, optional: true, required: false
  private _applicationName?: string; 
  public get applicationName() {
    return this.getStringAttribute('application_name');
  }
  public set applicationName(value: string) {
    this._applicationName = value;
  }
  public resetApplicationName() {
    this._applicationName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get applicationNameInput() {
    return this._applicationName;
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

  // microtenant_id - computed: false, optional: true, required: false
  private _microtenantId?: string; 
  public get microtenantId() {
    return this.getStringAttribute('microtenant_id');
  }
  public set microtenantId(value: string) {
    this._microtenantId = value;
  }
  public resetMicrotenantId() {
    this._microtenantId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get microtenantIdInput() {
    return this._microtenantId;
  }

  // weighted_load_balancing - computed: true, optional: true, required: false
  private _weightedLoadBalancing?: boolean | cdktf.IResolvable; 
  public get weightedLoadBalancing() {
    return this.getBooleanAttribute('weighted_load_balancing');
  }
  public set weightedLoadBalancing(value: boolean | cdktf.IResolvable) {
    this._weightedLoadBalancing = value;
  }
  public resetWeightedLoadBalancing() {
    this._weightedLoadBalancing = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get weightedLoadBalancingInput() {
    return this._weightedLoadBalancing;
  }

  // application_to_server_group_mappings - computed: false, optional: true, required: false
  private _applicationToServerGroupMappings = new ApplicationSegmentWeightedlbConfigApplicationToServerGroupMappingsList(this, "application_to_server_group_mappings", false);
  public get applicationToServerGroupMappings() {
    return this._applicationToServerGroupMappings;
  }
  public putApplicationToServerGroupMappings(value: ApplicationSegmentWeightedlbConfigApplicationToServerGroupMappings[] | cdktf.IResolvable) {
    this._applicationToServerGroupMappings.internalValue = value;
  }
  public resetApplicationToServerGroupMappings() {
    this._applicationToServerGroupMappings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get applicationToServerGroupMappingsInput() {
    return this._applicationToServerGroupMappings.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      application_id: cdktf.stringToTerraform(this._applicationId),
      application_name: cdktf.stringToTerraform(this._applicationName),
      id: cdktf.stringToTerraform(this._id),
      microtenant_id: cdktf.stringToTerraform(this._microtenantId),
      weighted_load_balancing: cdktf.booleanToTerraform(this._weightedLoadBalancing),
      application_to_server_group_mappings: cdktf.listMapper(applicationSegmentWeightedlbConfigApplicationToServerGroupMappingsToTerraform, true)(this._applicationToServerGroupMappings.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      application_id: {
        value: cdktf.stringToHclTerraform(this._applicationId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      application_name: {
        value: cdktf.stringToHclTerraform(this._applicationName),
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
      microtenant_id: {
        value: cdktf.stringToHclTerraform(this._microtenantId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      weighted_load_balancing: {
        value: cdktf.booleanToHclTerraform(this._weightedLoadBalancing),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      application_to_server_group_mappings: {
        value: cdktf.listMapperHcl(applicationSegmentWeightedlbConfigApplicationToServerGroupMappingsToHclTerraform, true)(this._applicationToServerGroupMappings.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ApplicationSegmentWeightedlbConfigApplicationToServerGroupMappingsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
