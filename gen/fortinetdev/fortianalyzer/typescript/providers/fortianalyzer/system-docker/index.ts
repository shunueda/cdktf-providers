// https://registry.terraform.io/providers/fortinetdev/fortianalyzer/1.5.1/docs/resources/system_docker
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SystemDockerConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortianalyzer/1.5.1/docs/resources/system_docker#cpu SystemDocker#cpu}
  */
  readonly cpu?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortianalyzer/1.5.1/docs/resources/system_docker#default_address_pool_base SystemDocker#default_address_pool_base}
  */
  readonly defaultAddressPoolBase?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortianalyzer/1.5.1/docs/resources/system_docker#default_address_pool_size SystemDocker#default_address_pool_size}
  */
  readonly defaultAddressPoolSize?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortianalyzer/1.5.1/docs/resources/system_docker#docker_user_login_max SystemDocker#docker_user_login_max}
  */
  readonly dockerUserLoginMax?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortianalyzer/1.5.1/docs/resources/system_docker#fortiaiops SystemDocker#fortiaiops}
  */
  readonly fortiaiops?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortianalyzer/1.5.1/docs/resources/system_docker#fortiauthenticator SystemDocker#fortiauthenticator}
  */
  readonly fortiauthenticator?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortianalyzer/1.5.1/docs/resources/system_docker#fortiportal SystemDocker#fortiportal}
  */
  readonly fortiportal?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortianalyzer/1.5.1/docs/resources/system_docker#fortisigconverter SystemDocker#fortisigconverter}
  */
  readonly fortisigconverter?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortianalyzer/1.5.1/docs/resources/system_docker#fortisoar SystemDocker#fortisoar}
  */
  readonly fortisoar?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortianalyzer/1.5.1/docs/resources/system_docker#fortiwlm SystemDocker#fortiwlm}
  */
  readonly fortiwlm?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortianalyzer/1.5.1/docs/resources/system_docker#fsmcollector SystemDocker#fsmcollector}
  */
  readonly fsmcollector?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortianalyzer/1.5.1/docs/resources/system_docker#id SystemDocker#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortianalyzer/1.5.1/docs/resources/system_docker#mem SystemDocker#mem}
  */
  readonly mem?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortianalyzer/1.5.1/docs/resources/system_docker#sdwancontroller SystemDocker#sdwancontroller}
  */
  readonly sdwancontroller?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortianalyzer/1.5.1/docs/resources/system_docker#status SystemDocker#status}
  */
  readonly status?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortianalyzer/1.5.1/docs/resources/system_docker#universalconnector SystemDocker#universalconnector}
  */
  readonly universalconnector?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortianalyzer/1.5.1/docs/resources/system_docker fortianalyzer_system_docker}
*/
export class SystemDocker extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortianalyzer_system_docker";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SystemDocker resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SystemDocker to import
  * @param importFromId The id of the existing SystemDocker that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortianalyzer/1.5.1/docs/resources/system_docker#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SystemDocker to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortianalyzer_system_docker", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortianalyzer/1.5.1/docs/resources/system_docker fortianalyzer_system_docker} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SystemDockerConfig = {}
  */
  public constructor(scope: Construct, id: string, config: SystemDockerConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'fortianalyzer_system_docker',
      terraformGeneratorMetadata: {
        providerName: 'fortianalyzer',
        providerVersion: '1.5.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._cpu = config.cpu;
    this._defaultAddressPoolBase = config.defaultAddressPoolBase;
    this._defaultAddressPoolSize = config.defaultAddressPoolSize;
    this._dockerUserLoginMax = config.dockerUserLoginMax;
    this._fortiaiops = config.fortiaiops;
    this._fortiauthenticator = config.fortiauthenticator;
    this._fortiportal = config.fortiportal;
    this._fortisigconverter = config.fortisigconverter;
    this._fortisoar = config.fortisoar;
    this._fortiwlm = config.fortiwlm;
    this._fsmcollector = config.fsmcollector;
    this._id = config.id;
    this._mem = config.mem;
    this._sdwancontroller = config.sdwancontroller;
    this._status = config.status;
    this._universalconnector = config.universalconnector;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cpu - computed: true, optional: true, required: false
  private _cpu?: number; 
  public get cpu() {
    return this.getNumberAttribute('cpu');
  }
  public set cpu(value: number) {
    this._cpu = value;
  }
  public resetCpu() {
    this._cpu = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cpuInput() {
    return this._cpu;
  }

  // default_address_pool_base - computed: true, optional: true, required: false
  private _defaultAddressPoolBase?: string[]; 
  public get defaultAddressPoolBase() {
    return this.getListAttribute('default_address_pool_base');
  }
  public set defaultAddressPoolBase(value: string[]) {
    this._defaultAddressPoolBase = value;
  }
  public resetDefaultAddressPoolBase() {
    this._defaultAddressPoolBase = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultAddressPoolBaseInput() {
    return this._defaultAddressPoolBase;
  }

  // default_address_pool_size - computed: true, optional: true, required: false
  private _defaultAddressPoolSize?: number; 
  public get defaultAddressPoolSize() {
    return this.getNumberAttribute('default_address_pool_size');
  }
  public set defaultAddressPoolSize(value: number) {
    this._defaultAddressPoolSize = value;
  }
  public resetDefaultAddressPoolSize() {
    this._defaultAddressPoolSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultAddressPoolSizeInput() {
    return this._defaultAddressPoolSize;
  }

  // docker_user_login_max - computed: true, optional: true, required: false
  private _dockerUserLoginMax?: number; 
  public get dockerUserLoginMax() {
    return this.getNumberAttribute('docker_user_login_max');
  }
  public set dockerUserLoginMax(value: number) {
    this._dockerUserLoginMax = value;
  }
  public resetDockerUserLoginMax() {
    this._dockerUserLoginMax = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dockerUserLoginMaxInput() {
    return this._dockerUserLoginMax;
  }

  // fortiaiops - computed: true, optional: true, required: false
  private _fortiaiops?: string; 
  public get fortiaiops() {
    return this.getStringAttribute('fortiaiops');
  }
  public set fortiaiops(value: string) {
    this._fortiaiops = value;
  }
  public resetFortiaiops() {
    this._fortiaiops = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fortiaiopsInput() {
    return this._fortiaiops;
  }

  // fortiauthenticator - computed: true, optional: true, required: false
  private _fortiauthenticator?: string; 
  public get fortiauthenticator() {
    return this.getStringAttribute('fortiauthenticator');
  }
  public set fortiauthenticator(value: string) {
    this._fortiauthenticator = value;
  }
  public resetFortiauthenticator() {
    this._fortiauthenticator = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fortiauthenticatorInput() {
    return this._fortiauthenticator;
  }

  // fortiportal - computed: true, optional: true, required: false
  private _fortiportal?: string; 
  public get fortiportal() {
    return this.getStringAttribute('fortiportal');
  }
  public set fortiportal(value: string) {
    this._fortiportal = value;
  }
  public resetFortiportal() {
    this._fortiportal = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fortiportalInput() {
    return this._fortiportal;
  }

  // fortisigconverter - computed: true, optional: true, required: false
  private _fortisigconverter?: string; 
  public get fortisigconverter() {
    return this.getStringAttribute('fortisigconverter');
  }
  public set fortisigconverter(value: string) {
    this._fortisigconverter = value;
  }
  public resetFortisigconverter() {
    this._fortisigconverter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fortisigconverterInput() {
    return this._fortisigconverter;
  }

  // fortisoar - computed: true, optional: true, required: false
  private _fortisoar?: string; 
  public get fortisoar() {
    return this.getStringAttribute('fortisoar');
  }
  public set fortisoar(value: string) {
    this._fortisoar = value;
  }
  public resetFortisoar() {
    this._fortisoar = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fortisoarInput() {
    return this._fortisoar;
  }

  // fortiwlm - computed: true, optional: true, required: false
  private _fortiwlm?: string; 
  public get fortiwlm() {
    return this.getStringAttribute('fortiwlm');
  }
  public set fortiwlm(value: string) {
    this._fortiwlm = value;
  }
  public resetFortiwlm() {
    this._fortiwlm = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fortiwlmInput() {
    return this._fortiwlm;
  }

  // fsmcollector - computed: true, optional: true, required: false
  private _fsmcollector?: string; 
  public get fsmcollector() {
    return this.getStringAttribute('fsmcollector');
  }
  public set fsmcollector(value: string) {
    this._fsmcollector = value;
  }
  public resetFsmcollector() {
    this._fsmcollector = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fsmcollectorInput() {
    return this._fsmcollector;
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

  // mem - computed: true, optional: true, required: false
  private _mem?: number; 
  public get mem() {
    return this.getNumberAttribute('mem');
  }
  public set mem(value: number) {
    this._mem = value;
  }
  public resetMem() {
    this._mem = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get memInput() {
    return this._mem;
  }

  // sdwancontroller - computed: true, optional: true, required: false
  private _sdwancontroller?: string; 
  public get sdwancontroller() {
    return this.getStringAttribute('sdwancontroller');
  }
  public set sdwancontroller(value: string) {
    this._sdwancontroller = value;
  }
  public resetSdwancontroller() {
    this._sdwancontroller = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sdwancontrollerInput() {
    return this._sdwancontroller;
  }

  // status - computed: true, optional: true, required: false
  private _status?: string; 
  public get status() {
    return this.getStringAttribute('status');
  }
  public set status(value: string) {
    this._status = value;
  }
  public resetStatus() {
    this._status = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status;
  }

  // universalconnector - computed: true, optional: true, required: false
  private _universalconnector?: string; 
  public get universalconnector() {
    return this.getStringAttribute('universalconnector');
  }
  public set universalconnector(value: string) {
    this._universalconnector = value;
  }
  public resetUniversalconnector() {
    this._universalconnector = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get universalconnectorInput() {
    return this._universalconnector;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      cpu: cdktf.numberToTerraform(this._cpu),
      default_address_pool_base: cdktf.listMapper(cdktf.stringToTerraform, false)(this._defaultAddressPoolBase),
      default_address_pool_size: cdktf.numberToTerraform(this._defaultAddressPoolSize),
      docker_user_login_max: cdktf.numberToTerraform(this._dockerUserLoginMax),
      fortiaiops: cdktf.stringToTerraform(this._fortiaiops),
      fortiauthenticator: cdktf.stringToTerraform(this._fortiauthenticator),
      fortiportal: cdktf.stringToTerraform(this._fortiportal),
      fortisigconverter: cdktf.stringToTerraform(this._fortisigconverter),
      fortisoar: cdktf.stringToTerraform(this._fortisoar),
      fortiwlm: cdktf.stringToTerraform(this._fortiwlm),
      fsmcollector: cdktf.stringToTerraform(this._fsmcollector),
      id: cdktf.stringToTerraform(this._id),
      mem: cdktf.numberToTerraform(this._mem),
      sdwancontroller: cdktf.stringToTerraform(this._sdwancontroller),
      status: cdktf.stringToTerraform(this._status),
      universalconnector: cdktf.stringToTerraform(this._universalconnector),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      cpu: {
        value: cdktf.numberToHclTerraform(this._cpu),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      default_address_pool_base: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._defaultAddressPoolBase),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      default_address_pool_size: {
        value: cdktf.numberToHclTerraform(this._defaultAddressPoolSize),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      docker_user_login_max: {
        value: cdktf.numberToHclTerraform(this._dockerUserLoginMax),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      fortiaiops: {
        value: cdktf.stringToHclTerraform(this._fortiaiops),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      fortiauthenticator: {
        value: cdktf.stringToHclTerraform(this._fortiauthenticator),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      fortiportal: {
        value: cdktf.stringToHclTerraform(this._fortiportal),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      fortisigconverter: {
        value: cdktf.stringToHclTerraform(this._fortisigconverter),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      fortisoar: {
        value: cdktf.stringToHclTerraform(this._fortisoar),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      fortiwlm: {
        value: cdktf.stringToHclTerraform(this._fortiwlm),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      fsmcollector: {
        value: cdktf.stringToHclTerraform(this._fsmcollector),
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
      mem: {
        value: cdktf.numberToHclTerraform(this._mem),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      sdwancontroller: {
        value: cdktf.stringToHclTerraform(this._sdwancontroller),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      status: {
        value: cdktf.stringToHclTerraform(this._status),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      universalconnector: {
        value: cdktf.stringToHclTerraform(this._universalconnector),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
