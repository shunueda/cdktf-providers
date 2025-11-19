// https://registry.terraform.io/providers/spacelift-io/spacelift/1.38.0/docs/resources/worker_pool
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface WorkerPoolConfig extends cdktf.TerraformMetaArguments {
  /**
  * certificate signing request in base64. Changing this value will trigger a token reset.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spacelift-io/spacelift/1.38.0/docs/resources/worker_pool#csr WorkerPool#csr}
  */
  readonly csr?: string;
  /**
  * description of the worker pool
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spacelift-io/spacelift/1.38.0/docs/resources/worker_pool#description WorkerPool#description}
  */
  readonly description?: string;
  /**
  * Limit of how many concurrent drift detection runs are allowed per worker pool
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spacelift-io/spacelift/1.38.0/docs/resources/worker_pool#drift_detection_run_limit WorkerPool#drift_detection_run_limit}
  */
  readonly driftDetectionRunLimit?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spacelift-io/spacelift/1.38.0/docs/resources/worker_pool#id WorkerPool#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spacelift-io/spacelift/1.38.0/docs/resources/worker_pool#labels WorkerPool#labels}
  */
  readonly labels?: string[];
  /**
  * name of the worker pool
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spacelift-io/spacelift/1.38.0/docs/resources/worker_pool#name WorkerPool#name}
  */
  readonly name: string;
  /**
  * ID (slug) of the space the worker pool is in
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spacelift-io/spacelift/1.38.0/docs/resources/worker_pool#space_id WorkerPool#space_id}
  */
  readonly spaceId?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/spacelift-io/spacelift/1.38.0/docs/resources/worker_pool spacelift_worker_pool}
*/
export class WorkerPool extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "spacelift_worker_pool";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a WorkerPool resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the WorkerPool to import
  * @param importFromId The id of the existing WorkerPool that should be imported. Refer to the {@link https://registry.terraform.io/providers/spacelift-io/spacelift/1.38.0/docs/resources/worker_pool#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the WorkerPool to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "spacelift_worker_pool", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/spacelift-io/spacelift/1.38.0/docs/resources/worker_pool spacelift_worker_pool} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options WorkerPoolConfig
  */
  public constructor(scope: Construct, id: string, config: WorkerPoolConfig) {
    super(scope, id, {
      terraformResourceType: 'spacelift_worker_pool',
      terraformGeneratorMetadata: {
        providerName: 'spacelift',
        providerVersion: '1.38.0',
        providerVersionConstraint: '1.38.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._csr = config.csr;
    this._description = config.description;
    this._driftDetectionRunLimit = config.driftDetectionRunLimit;
    this._id = config.id;
    this._labels = config.labels;
    this._name = config.name;
    this._spaceId = config.spaceId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // config - computed: true, optional: false, required: false
  public get config() {
    return this.getStringAttribute('config');
  }

  // csr - computed: true, optional: true, required: false
  private _csr?: string; 
  public get csr() {
    return this.getStringAttribute('csr');
  }
  public set csr(value: string) {
    this._csr = value;
  }
  public resetCsr() {
    this._csr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get csrInput() {
    return this._csr;
  }

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // drift_detection_run_limit - computed: false, optional: true, required: false
  private _driftDetectionRunLimit?: number; 
  public get driftDetectionRunLimit() {
    return this.getNumberAttribute('drift_detection_run_limit');
  }
  public set driftDetectionRunLimit(value: number) {
    this._driftDetectionRunLimit = value;
  }
  public resetDriftDetectionRunLimit() {
    this._driftDetectionRunLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get driftDetectionRunLimitInput() {
    return this._driftDetectionRunLimit;
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

  // labels - computed: false, optional: true, required: false
  private _labels?: string[]; 
  public get labels() {
    return cdktf.Fn.tolist(this.getListAttribute('labels'));
  }
  public set labels(value: string[]) {
    this._labels = value;
  }
  public resetLabels() {
    this._labels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelsInput() {
    return this._labels;
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

  // private_key - computed: true, optional: false, required: false
  public get privateKey() {
    return this.getStringAttribute('private_key');
  }

  // space_id - computed: true, optional: true, required: false
  private _spaceId?: string; 
  public get spaceId() {
    return this.getStringAttribute('space_id');
  }
  public set spaceId(value: string) {
    this._spaceId = value;
  }
  public resetSpaceId() {
    this._spaceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get spaceIdInput() {
    return this._spaceId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      csr: cdktf.stringToTerraform(this._csr),
      description: cdktf.stringToTerraform(this._description),
      drift_detection_run_limit: cdktf.numberToTerraform(this._driftDetectionRunLimit),
      id: cdktf.stringToTerraform(this._id),
      labels: cdktf.listMapper(cdktf.stringToTerraform, false)(this._labels),
      name: cdktf.stringToTerraform(this._name),
      space_id: cdktf.stringToTerraform(this._spaceId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      csr: {
        value: cdktf.stringToHclTerraform(this._csr),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      drift_detection_run_limit: {
        value: cdktf.numberToHclTerraform(this._driftDetectionRunLimit),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      labels: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._labels),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      space_id: {
        value: cdktf.stringToHclTerraform(this._spaceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
