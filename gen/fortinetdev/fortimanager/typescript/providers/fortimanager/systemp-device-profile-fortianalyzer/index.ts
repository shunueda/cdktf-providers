// https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/systemp_device_profile_fortianalyzer
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SystempDeviceProfileFortianalyzerConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/systemp_device_profile_fortianalyzer#adom SystempDeviceProfileFortianalyzer#adom}
  */
  readonly adom?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/systemp_device_profile_fortianalyzer#devprof SystempDeviceProfileFortianalyzer#devprof}
  */
  readonly devprof: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/systemp_device_profile_fortianalyzer#id SystempDeviceProfileFortianalyzer#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/systemp_device_profile_fortianalyzer#managed_sn SystempDeviceProfileFortianalyzer#managed_sn}
  */
  readonly managedSn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/systemp_device_profile_fortianalyzer#scopetype SystempDeviceProfileFortianalyzer#scopetype}
  */
  readonly scopetype?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/systemp_device_profile_fortianalyzer#target SystempDeviceProfileFortianalyzer#target}
  */
  readonly target?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/systemp_device_profile_fortianalyzer#target_ip SystempDeviceProfileFortianalyzer#target_ip}
  */
  readonly targetIp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/systemp_device_profile_fortianalyzer#target_sn SystempDeviceProfileFortianalyzer#target_sn}
  */
  readonly targetSn?: string[];
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/systemp_device_profile_fortianalyzer fortimanager_systemp_device_profile_fortianalyzer}
*/
export class SystempDeviceProfileFortianalyzer extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortimanager_systemp_device_profile_fortianalyzer";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SystempDeviceProfileFortianalyzer resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SystempDeviceProfileFortianalyzer to import
  * @param importFromId The id of the existing SystempDeviceProfileFortianalyzer that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/systemp_device_profile_fortianalyzer#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SystempDeviceProfileFortianalyzer to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortimanager_systemp_device_profile_fortianalyzer", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/systemp_device_profile_fortianalyzer fortimanager_systemp_device_profile_fortianalyzer} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SystempDeviceProfileFortianalyzerConfig
  */
  public constructor(scope: Construct, id: string, config: SystempDeviceProfileFortianalyzerConfig) {
    super(scope, id, {
      terraformResourceType: 'fortimanager_systemp_device_profile_fortianalyzer',
      terraformGeneratorMetadata: {
        providerName: 'fortimanager',
        providerVersion: '1.14.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._adom = config.adom;
    this._devprof = config.devprof;
    this._id = config.id;
    this._managedSn = config.managedSn;
    this._scopetype = config.scopetype;
    this._target = config.target;
    this._targetIp = config.targetIp;
    this._targetSn = config.targetSn;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // adom - computed: false, optional: true, required: false
  private _adom?: string; 
  public get adom() {
    return this.getStringAttribute('adom');
  }
  public set adom(value: string) {
    this._adom = value;
  }
  public resetAdom() {
    this._adom = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adomInput() {
    return this._adom;
  }

  // devprof - computed: false, optional: false, required: true
  private _devprof?: string; 
  public get devprof() {
    return this.getStringAttribute('devprof');
  }
  public set devprof(value: string) {
    this._devprof = value;
  }
  // Temporarily expose input value. Use with caution.
  public get devprofInput() {
    return this._devprof;
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

  // managed_sn - computed: false, optional: true, required: false
  private _managedSn?: string; 
  public get managedSn() {
    return this.getStringAttribute('managed_sn');
  }
  public set managedSn(value: string) {
    this._managedSn = value;
  }
  public resetManagedSn() {
    this._managedSn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get managedSnInput() {
    return this._managedSn;
  }

  // scopetype - computed: false, optional: true, required: false
  private _scopetype?: string; 
  public get scopetype() {
    return this.getStringAttribute('scopetype');
  }
  public set scopetype(value: string) {
    this._scopetype = value;
  }
  public resetScopetype() {
    this._scopetype = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scopetypeInput() {
    return this._scopetype;
  }

  // target - computed: false, optional: true, required: false
  private _target?: string; 
  public get target() {
    return this.getStringAttribute('target');
  }
  public set target(value: string) {
    this._target = value;
  }
  public resetTarget() {
    this._target = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetInput() {
    return this._target;
  }

  // target_ip - computed: false, optional: true, required: false
  private _targetIp?: string; 
  public get targetIp() {
    return this.getStringAttribute('target_ip');
  }
  public set targetIp(value: string) {
    this._targetIp = value;
  }
  public resetTargetIp() {
    this._targetIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetIpInput() {
    return this._targetIp;
  }

  // target_sn - computed: true, optional: true, required: false
  private _targetSn?: string[]; 
  public get targetSn() {
    return cdktf.Fn.tolist(this.getListAttribute('target_sn'));
  }
  public set targetSn(value: string[]) {
    this._targetSn = value;
  }
  public resetTargetSn() {
    this._targetSn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetSnInput() {
    return this._targetSn;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      adom: cdktf.stringToTerraform(this._adom),
      devprof: cdktf.stringToTerraform(this._devprof),
      id: cdktf.stringToTerraform(this._id),
      managed_sn: cdktf.stringToTerraform(this._managedSn),
      scopetype: cdktf.stringToTerraform(this._scopetype),
      target: cdktf.stringToTerraform(this._target),
      target_ip: cdktf.stringToTerraform(this._targetIp),
      target_sn: cdktf.listMapper(cdktf.stringToTerraform, false)(this._targetSn),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      adom: {
        value: cdktf.stringToHclTerraform(this._adom),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      devprof: {
        value: cdktf.stringToHclTerraform(this._devprof),
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
      managed_sn: {
        value: cdktf.stringToHclTerraform(this._managedSn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      scopetype: {
        value: cdktf.stringToHclTerraform(this._scopetype),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      target: {
        value: cdktf.stringToHclTerraform(this._target),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      target_ip: {
        value: cdktf.stringToHclTerraform(this._targetIp),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      target_sn: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._targetSn),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
