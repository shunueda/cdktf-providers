// https://registry.terraform.io/providers/rackn/drp/2.3.2/docs/resources/machine
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface MachineConfig extends cdktf.TerraformMetaArguments {
  /**
  * List of parameters to add to the machine when allocating.  Parameters are removed on release.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rackn/drp/2.3.2/docs/resources/machine#add_parameters Machine#add_parameters}
  */
  readonly addParameters?: string[];
  /**
  * List of profiles to add to the machine when allocating.  Profiles are removed on release.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rackn/drp/2.3.2/docs/resources/machine#add_profiles Machine#add_profiles}
  */
  readonly addProfiles?: string[];
  /**
  * Workflow to run when the machine is allocated in the pool
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rackn/drp/2.3.2/docs/resources/machine#allocate_workflow Machine#allocate_workflow}
  */
  readonly allocateWorkflow?: string;
  /**
  * List of ssh public keys that should be added to the access-keys parameter on the machine.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rackn/drp/2.3.2/docs/resources/machine#authorized_keys Machine#authorized_keys}
  */
  readonly authorizedKeys?: string[];
  /**
  * List of parameters to add to the machine when deallocating.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rackn/drp/2.3.2/docs/resources/machine#deallocate_parameters Machine#deallocate_parameters}
  */
  readonly deallocateParameters?: string[];
  /**
  * List of profiles to add to the machine when deallocating.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rackn/drp/2.3.2/docs/resources/machine#deallocate_profiles Machine#deallocate_profiles}
  */
  readonly deallocateProfiles?: string[];
  /**
  * Workflow to run when the machine is released to the pool
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rackn/drp/2.3.2/docs/resources/machine#deallocate_workflow Machine#deallocate_workflow}
  */
  readonly deallocateWorkflow?: string;
  /**
  * List of filters to restrict the search for a machie (usee Digital Rebar format e.g. FilterVar=Fn(value))
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rackn/drp/2.3.2/docs/resources/machine#filters Machine#filters}
  */
  readonly filters?: string[];
  /**
  * Pool to operate against for machine actions
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rackn/drp/2.3.2/docs/resources/machine#pool Machine#pool}
  */
  readonly pool?: string;
  /**
  * Maximum time to wait for the machine to complete transition.  Time string format.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rackn/drp/2.3.2/docs/resources/machine#timeout Machine#timeout}
  */
  readonly timeout?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/rackn/drp/2.3.2/docs/resources/machine drp_machine}
*/
export class Machine extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "drp_machine";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Machine resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Machine to import
  * @param importFromId The id of the existing Machine that should be imported. Refer to the {@link https://registry.terraform.io/providers/rackn/drp/2.3.2/docs/resources/machine#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Machine to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "drp_machine", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/rackn/drp/2.3.2/docs/resources/machine drp_machine} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options MachineConfig = {}
  */
  public constructor(scope: Construct, id: string, config: MachineConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'drp_machine',
      terraformGeneratorMetadata: {
        providerName: 'drp',
        providerVersion: '2.3.2',
        providerVersionConstraint: '2.3.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._addParameters = config.addParameters;
    this._addProfiles = config.addProfiles;
    this._allocateWorkflow = config.allocateWorkflow;
    this._authorizedKeys = config.authorizedKeys;
    this._deallocateParameters = config.deallocateParameters;
    this._deallocateProfiles = config.deallocateProfiles;
    this._deallocateWorkflow = config.deallocateWorkflow;
    this._filters = config.filters;
    this._pool = config.pool;
    this._timeout = config.timeout;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // add_parameters - computed: false, optional: true, required: false
  private _addParameters?: string[]; 
  public get addParameters() {
    return this.getListAttribute('add_parameters');
  }
  public set addParameters(value: string[]) {
    this._addParameters = value;
  }
  public resetAddParameters() {
    this._addParameters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addParametersInput() {
    return this._addParameters;
  }

  // add_profiles - computed: false, optional: true, required: false
  private _addProfiles?: string[]; 
  public get addProfiles() {
    return this.getListAttribute('add_profiles');
  }
  public set addProfiles(value: string[]) {
    this._addProfiles = value;
  }
  public resetAddProfiles() {
    this._addProfiles = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addProfilesInput() {
    return this._addProfiles;
  }

  // address - computed: true, optional: false, required: false
  public get address() {
    return this.getStringAttribute('address');
  }

  // allocate_workflow - computed: false, optional: true, required: false
  private _allocateWorkflow?: string; 
  public get allocateWorkflow() {
    return this.getStringAttribute('allocate_workflow');
  }
  public set allocateWorkflow(value: string) {
    this._allocateWorkflow = value;
  }
  public resetAllocateWorkflow() {
    this._allocateWorkflow = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allocateWorkflowInput() {
    return this._allocateWorkflow;
  }

  // authorized_keys - computed: false, optional: true, required: false
  private _authorizedKeys?: string[]; 
  public get authorizedKeys() {
    return this.getListAttribute('authorized_keys');
  }
  public set authorizedKeys(value: string[]) {
    this._authorizedKeys = value;
  }
  public resetAuthorizedKeys() {
    this._authorizedKeys = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authorizedKeysInput() {
    return this._authorizedKeys;
  }

  // deallocate_parameters - computed: false, optional: true, required: false
  private _deallocateParameters?: string[]; 
  public get deallocateParameters() {
    return this.getListAttribute('deallocate_parameters');
  }
  public set deallocateParameters(value: string[]) {
    this._deallocateParameters = value;
  }
  public resetDeallocateParameters() {
    this._deallocateParameters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deallocateParametersInput() {
    return this._deallocateParameters;
  }

  // deallocate_profiles - computed: false, optional: true, required: false
  private _deallocateProfiles?: string[]; 
  public get deallocateProfiles() {
    return this.getListAttribute('deallocate_profiles');
  }
  public set deallocateProfiles(value: string[]) {
    this._deallocateProfiles = value;
  }
  public resetDeallocateProfiles() {
    this._deallocateProfiles = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deallocateProfilesInput() {
    return this._deallocateProfiles;
  }

  // deallocate_workflow - computed: false, optional: true, required: false
  private _deallocateWorkflow?: string; 
  public get deallocateWorkflow() {
    return this.getStringAttribute('deallocate_workflow');
  }
  public set deallocateWorkflow(value: string) {
    this._deallocateWorkflow = value;
  }
  public resetDeallocateWorkflow() {
    this._deallocateWorkflow = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deallocateWorkflowInput() {
    return this._deallocateWorkflow;
  }

  // filters - computed: false, optional: true, required: false
  private _filters?: string[]; 
  public get filters() {
    return this.getListAttribute('filters');
  }
  public set filters(value: string[]) {
    this._filters = value;
  }
  public resetFilters() {
    this._filters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filtersInput() {
    return this._filters;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // pool - computed: true, optional: true, required: false
  private _pool?: string; 
  public get pool() {
    return this.getStringAttribute('pool');
  }
  public set pool(value: string) {
    this._pool = value;
  }
  public resetPool() {
    this._pool = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get poolInput() {
    return this._pool;
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // timeout - computed: true, optional: true, required: false
  private _timeout?: string; 
  public get timeout() {
    return this.getStringAttribute('timeout');
  }
  public set timeout(value: string) {
    this._timeout = value;
  }
  public resetTimeout() {
    this._timeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutInput() {
    return this._timeout;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      add_parameters: cdktf.listMapper(cdktf.stringToTerraform, false)(this._addParameters),
      add_profiles: cdktf.listMapper(cdktf.stringToTerraform, false)(this._addProfiles),
      allocate_workflow: cdktf.stringToTerraform(this._allocateWorkflow),
      authorized_keys: cdktf.listMapper(cdktf.stringToTerraform, false)(this._authorizedKeys),
      deallocate_parameters: cdktf.listMapper(cdktf.stringToTerraform, false)(this._deallocateParameters),
      deallocate_profiles: cdktf.listMapper(cdktf.stringToTerraform, false)(this._deallocateProfiles),
      deallocate_workflow: cdktf.stringToTerraform(this._deallocateWorkflow),
      filters: cdktf.listMapper(cdktf.stringToTerraform, false)(this._filters),
      pool: cdktf.stringToTerraform(this._pool),
      timeout: cdktf.stringToTerraform(this._timeout),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      add_parameters: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._addParameters),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      add_profiles: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._addProfiles),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      allocate_workflow: {
        value: cdktf.stringToHclTerraform(this._allocateWorkflow),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      authorized_keys: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._authorizedKeys),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      deallocate_parameters: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._deallocateParameters),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      deallocate_profiles: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._deallocateProfiles),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      deallocate_workflow: {
        value: cdktf.stringToHclTerraform(this._deallocateWorkflow),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      filters: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._filters),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      pool: {
        value: cdktf.stringToHclTerraform(this._pool),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      timeout: {
        value: cdktf.stringToHclTerraform(this._timeout),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
