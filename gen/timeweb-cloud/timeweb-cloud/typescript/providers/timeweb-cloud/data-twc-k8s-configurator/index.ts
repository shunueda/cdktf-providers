// https://registry.terraform.io/providers/timeweb-cloud/timeweb-cloud/1.6.6/docs/data-sources/twc_k8s_configurator
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataTwcK8SConfiguratorConfig extends cdktf.TerraformMetaArguments {
  /**
  * CPU frequency for the created server (`3.3`)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/timeweb-cloud/timeweb-cloud/1.6.6/docs/data-sources/twc_k8s_configurator#cpu_frequency DataTwcK8SConfigurator#cpu_frequency}
  */
  readonly cpuFrequency?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/timeweb-cloud/timeweb-cloud/1.6.6/docs/data-sources/twc_k8s_configurator#id DataTwcK8SConfigurator#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Location for the created server (`ru-1`, `ru-2`, `pl-1`, `kz-1`). When server was created all new presets or configuration may be only chosen from same location
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/timeweb-cloud/timeweb-cloud/1.6.6/docs/data-sources/twc_k8s_configurator#location DataTwcK8SConfigurator#location}
  */
  readonly location?: string;
  /**
  * Node type (`master`, `worker`)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/timeweb-cloud/timeweb-cloud/1.6.6/docs/data-sources/twc_k8s_configurator#node_type DataTwcK8SConfigurator#node_type}
  */
  readonly nodeType?: string;
  /**
  * Preset type for created node ()
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/timeweb-cloud/timeweb-cloud/1.6.6/docs/data-sources/twc_k8s_configurator#preset_type DataTwcK8SConfigurator#preset_type}
  */
  readonly presetType?: string;
  /**
  * requirements block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/timeweb-cloud/timeweb-cloud/1.6.6/docs/data-sources/twc_k8s_configurator#requirements DataTwcK8SConfigurator#requirements}
  */
  readonly requirements?: DataTwcK8SConfiguratorRequirements[] | cdktf.IResolvable;
}
export interface DataTwcK8SConfiguratorRequirements {
}

export function dataTwcK8SConfiguratorRequirementsToTerraform(struct?: DataTwcK8SConfiguratorRequirements | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTwcK8SConfiguratorRequirementsToHclTerraform(struct?: DataTwcK8SConfiguratorRequirements | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTwcK8SConfiguratorRequirementsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTwcK8SConfiguratorRequirements | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTwcK8SConfiguratorRequirements | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
    }
  }

  // cpu_max - computed: true, optional: false, required: false
  public get cpuMax() {
    return this.getNumberAttribute('cpu_max');
  }

  // cpu_min - computed: true, optional: false, required: false
  public get cpuMin() {
    return this.getNumberAttribute('cpu_min');
  }

  // cpu_step - computed: true, optional: false, required: false
  public get cpuStep() {
    return this.getNumberAttribute('cpu_step');
  }

  // disk_max - computed: true, optional: false, required: false
  public get diskMax() {
    return this.getNumberAttribute('disk_max');
  }

  // disk_min - computed: true, optional: false, required: false
  public get diskMin() {
    return this.getNumberAttribute('disk_min');
  }

  // disk_step - computed: true, optional: false, required: false
  public get diskStep() {
    return this.getNumberAttribute('disk_step');
  }

  // gpu_max - computed: true, optional: false, required: false
  public get gpuMax() {
    return this.getNumberAttribute('gpu_max');
  }

  // gpu_min - computed: true, optional: false, required: false
  public get gpuMin() {
    return this.getNumberAttribute('gpu_min');
  }

  // gpu_step - computed: true, optional: false, required: false
  public get gpuStep() {
    return this.getNumberAttribute('gpu_step');
  }

  // network_bandwidth_max - computed: true, optional: false, required: false
  public get networkBandwidthMax() {
    return this.getNumberAttribute('network_bandwidth_max');
  }

  // network_bandwidth_min - computed: true, optional: false, required: false
  public get networkBandwidthMin() {
    return this.getNumberAttribute('network_bandwidth_min');
  }

  // network_bandwidth_step - computed: true, optional: false, required: false
  public get networkBandwidthStep() {
    return this.getNumberAttribute('network_bandwidth_step');
  }

  // ram_max - computed: true, optional: false, required: false
  public get ramMax() {
    return this.getNumberAttribute('ram_max');
  }

  // ram_min - computed: true, optional: false, required: false
  public get ramMin() {
    return this.getNumberAttribute('ram_min');
  }

  // ram_step - computed: true, optional: false, required: false
  public get ramStep() {
    return this.getNumberAttribute('ram_step');
  }
}

export class DataTwcK8SConfiguratorRequirementsList extends cdktf.ComplexList {
  public internalValue? : DataTwcK8SConfiguratorRequirements[] | cdktf.IResolvable

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
  public get(index: number): DataTwcK8SConfiguratorRequirementsOutputReference {
    return new DataTwcK8SConfiguratorRequirementsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/timeweb-cloud/timeweb-cloud/1.6.6/docs/data-sources/twc_k8s_configurator twc_k8s_configurator}
*/
export class DataTwcK8SConfigurator extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "twc_k8s_configurator";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataTwcK8SConfigurator resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataTwcK8SConfigurator to import
  * @param importFromId The id of the existing DataTwcK8SConfigurator that should be imported. Refer to the {@link https://registry.terraform.io/providers/timeweb-cloud/timeweb-cloud/1.6.6/docs/data-sources/twc_k8s_configurator#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataTwcK8SConfigurator to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "twc_k8s_configurator", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/timeweb-cloud/timeweb-cloud/1.6.6/docs/data-sources/twc_k8s_configurator twc_k8s_configurator} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataTwcK8SConfiguratorConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataTwcK8SConfiguratorConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'twc_k8s_configurator',
      terraformGeneratorMetadata: {
        providerName: 'timeweb-cloud',
        providerVersion: '1.6.6'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._cpuFrequency = config.cpuFrequency;
    this._id = config.id;
    this._location = config.location;
    this._nodeType = config.nodeType;
    this._presetType = config.presetType;
    this._requirements.internalValue = config.requirements;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cpu_frequency - computed: true, optional: true, required: false
  private _cpuFrequency?: string; 
  public get cpuFrequency() {
    return this.getStringAttribute('cpu_frequency');
  }
  public set cpuFrequency(value: string) {
    this._cpuFrequency = value;
  }
  public resetCpuFrequency() {
    this._cpuFrequency = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cpuFrequencyInput() {
    return this._cpuFrequency;
  }

  // disk_type - computed: true, optional: false, required: false
  public get diskType() {
    return this.getStringAttribute('disk_type');
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

  // location - computed: true, optional: true, required: false
  private _location?: string; 
  public get location() {
    return this.getStringAttribute('location');
  }
  public set location(value: string) {
    this._location = value;
  }
  public resetLocation() {
    this._location = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get locationInput() {
    return this._location;
  }

  // node_type - computed: true, optional: true, required: false
  private _nodeType?: string; 
  public get nodeType() {
    return this.getStringAttribute('node_type');
  }
  public set nodeType(value: string) {
    this._nodeType = value;
  }
  public resetNodeType() {
    this._nodeType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeTypeInput() {
    return this._nodeType;
  }

  // preset_type - computed: true, optional: true, required: false
  private _presetType?: string; 
  public get presetType() {
    return this.getStringAttribute('preset_type');
  }
  public set presetType(value: string) {
    this._presetType = value;
  }
  public resetPresetType() {
    this._presetType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get presetTypeInput() {
    return this._presetType;
  }

  // requirements - computed: false, optional: true, required: false
  private _requirements = new DataTwcK8SConfiguratorRequirementsList(this, "requirements", false);
  public get requirements() {
    return this._requirements;
  }
  public putRequirements(value: DataTwcK8SConfiguratorRequirements[] | cdktf.IResolvable) {
    this._requirements.internalValue = value;
  }
  public resetRequirements() {
    this._requirements.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requirementsInput() {
    return this._requirements.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      cpu_frequency: cdktf.stringToTerraform(this._cpuFrequency),
      id: cdktf.stringToTerraform(this._id),
      location: cdktf.stringToTerraform(this._location),
      node_type: cdktf.stringToTerraform(this._nodeType),
      preset_type: cdktf.stringToTerraform(this._presetType),
      requirements: cdktf.listMapper(dataTwcK8SConfiguratorRequirementsToTerraform, true)(this._requirements.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      cpu_frequency: {
        value: cdktf.stringToHclTerraform(this._cpuFrequency),
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
      location: {
        value: cdktf.stringToHclTerraform(this._location),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      node_type: {
        value: cdktf.stringToHclTerraform(this._nodeType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      preset_type: {
        value: cdktf.stringToHclTerraform(this._presetType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      requirements: {
        value: cdktf.listMapperHcl(dataTwcK8SConfiguratorRequirementsToHclTerraform, true)(this._requirements.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataTwcK8SConfiguratorRequirementsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
