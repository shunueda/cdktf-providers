// https://registry.terraform.io/providers/josenk/esxi/1.10.3/docs/resources/resource_pool
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ResourcePoolConfig extends cdktf.TerraformMetaArguments {
  /**
  * CPU maximum (in MHz).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/josenk/esxi/1.10.3/docs/resources/resource_pool#cpu_max ResourcePool#cpu_max}
  */
  readonly cpuMax?: number;
  /**
  * CPU minimum (in MHz).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/josenk/esxi/1.10.3/docs/resources/resource_pool#cpu_min ResourcePool#cpu_min}
  */
  readonly cpuMin?: number;
  /**
  * Can pool borrow CPU resources from parent?
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/josenk/esxi/1.10.3/docs/resources/resource_pool#cpu_min_expandable ResourcePool#cpu_min_expandable}
  */
  readonly cpuMinExpandable?: string;
  /**
  * CPU shares (low/normal/high/<custom>).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/josenk/esxi/1.10.3/docs/resources/resource_pool#cpu_shares ResourcePool#cpu_shares}
  */
  readonly cpuShares?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/josenk/esxi/1.10.3/docs/resources/resource_pool#id ResourcePool#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Memory maximum (in MB).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/josenk/esxi/1.10.3/docs/resources/resource_pool#mem_max ResourcePool#mem_max}
  */
  readonly memMax?: number;
  /**
  * Memory minimum (in MB).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/josenk/esxi/1.10.3/docs/resources/resource_pool#mem_min ResourcePool#mem_min}
  */
  readonly memMin?: number;
  /**
  * Can pool borrow memory resources from parent?
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/josenk/esxi/1.10.3/docs/resources/resource_pool#mem_min_expandable ResourcePool#mem_min_expandable}
  */
  readonly memMinExpandable?: string;
  /**
  * Memory shares (low/normal/high/<custom>).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/josenk/esxi/1.10.3/docs/resources/resource_pool#mem_shares ResourcePool#mem_shares}
  */
  readonly memShares?: string;
  /**
  * Resource Pool Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/josenk/esxi/1.10.3/docs/resources/resource_pool#resource_pool_name ResourcePool#resource_pool_name}
  */
  readonly resourcePoolName: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/josenk/esxi/1.10.3/docs/resources/resource_pool esxi_resource_pool}
*/
export class ResourcePool extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "esxi_resource_pool";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ResourcePool resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ResourcePool to import
  * @param importFromId The id of the existing ResourcePool that should be imported. Refer to the {@link https://registry.terraform.io/providers/josenk/esxi/1.10.3/docs/resources/resource_pool#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ResourcePool to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "esxi_resource_pool", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/josenk/esxi/1.10.3/docs/resources/resource_pool esxi_resource_pool} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ResourcePoolConfig
  */
  public constructor(scope: Construct, id: string, config: ResourcePoolConfig) {
    super(scope, id, {
      terraformResourceType: 'esxi_resource_pool',
      terraformGeneratorMetadata: {
        providerName: 'esxi',
        providerVersion: '1.10.3',
        providerVersionConstraint: '1.10.3'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._cpuMax = config.cpuMax;
    this._cpuMin = config.cpuMin;
    this._cpuMinExpandable = config.cpuMinExpandable;
    this._cpuShares = config.cpuShares;
    this._id = config.id;
    this._memMax = config.memMax;
    this._memMin = config.memMin;
    this._memMinExpandable = config.memMinExpandable;
    this._memShares = config.memShares;
    this._resourcePoolName = config.resourcePoolName;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cpu_max - computed: true, optional: true, required: false
  private _cpuMax?: number; 
  public get cpuMax() {
    return this.getNumberAttribute('cpu_max');
  }
  public set cpuMax(value: number) {
    this._cpuMax = value;
  }
  public resetCpuMax() {
    this._cpuMax = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cpuMaxInput() {
    return this._cpuMax;
  }

  // cpu_min - computed: true, optional: true, required: false
  private _cpuMin?: number; 
  public get cpuMin() {
    return this.getNumberAttribute('cpu_min');
  }
  public set cpuMin(value: number) {
    this._cpuMin = value;
  }
  public resetCpuMin() {
    this._cpuMin = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cpuMinInput() {
    return this._cpuMin;
  }

  // cpu_min_expandable - computed: true, optional: true, required: false
  private _cpuMinExpandable?: string; 
  public get cpuMinExpandable() {
    return this.getStringAttribute('cpu_min_expandable');
  }
  public set cpuMinExpandable(value: string) {
    this._cpuMinExpandable = value;
  }
  public resetCpuMinExpandable() {
    this._cpuMinExpandable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cpuMinExpandableInput() {
    return this._cpuMinExpandable;
  }

  // cpu_shares - computed: true, optional: true, required: false
  private _cpuShares?: string; 
  public get cpuShares() {
    return this.getStringAttribute('cpu_shares');
  }
  public set cpuShares(value: string) {
    this._cpuShares = value;
  }
  public resetCpuShares() {
    this._cpuShares = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cpuSharesInput() {
    return this._cpuShares;
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

  // mem_max - computed: true, optional: true, required: false
  private _memMax?: number; 
  public get memMax() {
    return this.getNumberAttribute('mem_max');
  }
  public set memMax(value: number) {
    this._memMax = value;
  }
  public resetMemMax() {
    this._memMax = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get memMaxInput() {
    return this._memMax;
  }

  // mem_min - computed: true, optional: true, required: false
  private _memMin?: number; 
  public get memMin() {
    return this.getNumberAttribute('mem_min');
  }
  public set memMin(value: number) {
    this._memMin = value;
  }
  public resetMemMin() {
    this._memMin = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get memMinInput() {
    return this._memMin;
  }

  // mem_min_expandable - computed: true, optional: true, required: false
  private _memMinExpandable?: string; 
  public get memMinExpandable() {
    return this.getStringAttribute('mem_min_expandable');
  }
  public set memMinExpandable(value: string) {
    this._memMinExpandable = value;
  }
  public resetMemMinExpandable() {
    this._memMinExpandable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get memMinExpandableInput() {
    return this._memMinExpandable;
  }

  // mem_shares - computed: true, optional: true, required: false
  private _memShares?: string; 
  public get memShares() {
    return this.getStringAttribute('mem_shares');
  }
  public set memShares(value: string) {
    this._memShares = value;
  }
  public resetMemShares() {
    this._memShares = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get memSharesInput() {
    return this._memShares;
  }

  // resource_pool_name - computed: false, optional: false, required: true
  private _resourcePoolName?: string; 
  public get resourcePoolName() {
    return this.getStringAttribute('resource_pool_name');
  }
  public set resourcePoolName(value: string) {
    this._resourcePoolName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourcePoolNameInput() {
    return this._resourcePoolName;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      cpu_max: cdktf.numberToTerraform(this._cpuMax),
      cpu_min: cdktf.numberToTerraform(this._cpuMin),
      cpu_min_expandable: cdktf.stringToTerraform(this._cpuMinExpandable),
      cpu_shares: cdktf.stringToTerraform(this._cpuShares),
      id: cdktf.stringToTerraform(this._id),
      mem_max: cdktf.numberToTerraform(this._memMax),
      mem_min: cdktf.numberToTerraform(this._memMin),
      mem_min_expandable: cdktf.stringToTerraform(this._memMinExpandable),
      mem_shares: cdktf.stringToTerraform(this._memShares),
      resource_pool_name: cdktf.stringToTerraform(this._resourcePoolName),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      cpu_max: {
        value: cdktf.numberToHclTerraform(this._cpuMax),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      cpu_min: {
        value: cdktf.numberToHclTerraform(this._cpuMin),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      cpu_min_expandable: {
        value: cdktf.stringToHclTerraform(this._cpuMinExpandable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cpu_shares: {
        value: cdktf.stringToHclTerraform(this._cpuShares),
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
      mem_max: {
        value: cdktf.numberToHclTerraform(this._memMax),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      mem_min: {
        value: cdktf.numberToHclTerraform(this._memMin),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      mem_min_expandable: {
        value: cdktf.stringToHclTerraform(this._memMinExpandable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      mem_shares: {
        value: cdktf.stringToHclTerraform(this._memShares),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      resource_pool_name: {
        value: cdktf.stringToHclTerraform(this._resourcePoolName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
