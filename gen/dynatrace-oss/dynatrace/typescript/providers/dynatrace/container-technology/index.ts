// https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/container_technology
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ContainerTechnologyConfig extends cdktf.TerraformMetaArguments {
  /**
  * Platform: Cloud Foundry
  * 
  * Status: Released
  * 
  * Operating system: Linux
  * 
  * Min agent version: 1.159
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/container_technology#bosh_process_manager ContainerTechnology#bosh_process_manager}
  */
  readonly boshProcessManager: boolean | cdktf.IResolvable;
  /**
  * Platform: Kubernetes
  * 
  * Status: Released
  * 
  * Operating system: Linux
  * 
  * Min agent version: 1.169
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/container_technology#containerd ContainerTechnology#containerd}
  */
  readonly containerd: boolean | cdktf.IResolvable;
  /**
  * Platform: Kubernetes
  * 
  * Status: Released
  * 
  * Operating system: Linux
  * 
  * Min agent version: 1.163
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/container_technology#crio ContainerTechnology#crio}
  */
  readonly crio: boolean | cdktf.IResolvable;
  /**
  * Platform: Docker and Kubernetes
  * 
  * Status: Released
  * 
  * Operating system: Linux
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/container_technology#docker ContainerTechnology#docker}
  */
  readonly docker: boolean | cdktf.IResolvable;
  /**
  * Platform: Docker
  * 
  * Status: Early adopter
  * 
  * Operating system: Windows
  * 
  * Min agent version: 1.149
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/container_technology#docker_windows ContainerTechnology#docker_windows}
  */
  readonly dockerWindows: boolean | cdktf.IResolvable;
  /**
  * Platform: Cloud Foundry
  * 
  * Status: Released
  * 
  * Operating system: Linux
  * 
  * Min agent version: 1.133
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/container_technology#garden ContainerTechnology#garden}
  */
  readonly garden: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/container_technology#id ContainerTechnology#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Platform: Podman
  * 
  * Status: Released
  * 
  * Operating system: Linux
  * 
  * Min agent version: 1.267
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/container_technology#podman ContainerTechnology#podman}
  */
  readonly podman: boolean | cdktf.IResolvable;
  /**
  * The scope of this setting (HOST, HOST_GROUP). Omit this property if you want to cover the whole environment.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/container_technology#scope ContainerTechnology#scope}
  */
  readonly scope?: string;
  /**
  * Platform: Cloud Foundry
  * 
  * Status: Early adopter
  * 
  * Operating system: Windows
  * 
  * Min agent version: 1.175
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/container_technology#winc ContainerTechnology#winc}
  */
  readonly winc: boolean | cdktf.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/container_technology dynatrace_container_technology}
*/
export class ContainerTechnology extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "dynatrace_container_technology";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ContainerTechnology resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ContainerTechnology to import
  * @param importFromId The id of the existing ContainerTechnology that should be imported. Refer to the {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/container_technology#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ContainerTechnology to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "dynatrace_container_technology", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/container_technology dynatrace_container_technology} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ContainerTechnologyConfig
  */
  public constructor(scope: Construct, id: string, config: ContainerTechnologyConfig) {
    super(scope, id, {
      terraformResourceType: 'dynatrace_container_technology',
      terraformGeneratorMetadata: {
        providerName: 'dynatrace',
        providerVersion: '1.88.0',
        providerVersionConstraint: '1.88.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._boshProcessManager = config.boshProcessManager;
    this._containerd = config.containerd;
    this._crio = config.crio;
    this._docker = config.docker;
    this._dockerWindows = config.dockerWindows;
    this._garden = config.garden;
    this._id = config.id;
    this._podman = config.podman;
    this._scope = config.scope;
    this._winc = config.winc;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // bosh_process_manager - computed: false, optional: false, required: true
  private _boshProcessManager?: boolean | cdktf.IResolvable; 
  public get boshProcessManager() {
    return this.getBooleanAttribute('bosh_process_manager');
  }
  public set boshProcessManager(value: boolean | cdktf.IResolvable) {
    this._boshProcessManager = value;
  }
  // Temporarily expose input value. Use with caution.
  public get boshProcessManagerInput() {
    return this._boshProcessManager;
  }

  // containerd - computed: false, optional: false, required: true
  private _containerd?: boolean | cdktf.IResolvable; 
  public get containerd() {
    return this.getBooleanAttribute('containerd');
  }
  public set containerd(value: boolean | cdktf.IResolvable) {
    this._containerd = value;
  }
  // Temporarily expose input value. Use with caution.
  public get containerdInput() {
    return this._containerd;
  }

  // crio - computed: false, optional: false, required: true
  private _crio?: boolean | cdktf.IResolvable; 
  public get crio() {
    return this.getBooleanAttribute('crio');
  }
  public set crio(value: boolean | cdktf.IResolvable) {
    this._crio = value;
  }
  // Temporarily expose input value. Use with caution.
  public get crioInput() {
    return this._crio;
  }

  // docker - computed: false, optional: false, required: true
  private _docker?: boolean | cdktf.IResolvable; 
  public get docker() {
    return this.getBooleanAttribute('docker');
  }
  public set docker(value: boolean | cdktf.IResolvable) {
    this._docker = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dockerInput() {
    return this._docker;
  }

  // docker_windows - computed: false, optional: false, required: true
  private _dockerWindows?: boolean | cdktf.IResolvable; 
  public get dockerWindows() {
    return this.getBooleanAttribute('docker_windows');
  }
  public set dockerWindows(value: boolean | cdktf.IResolvable) {
    this._dockerWindows = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dockerWindowsInput() {
    return this._dockerWindows;
  }

  // garden - computed: false, optional: false, required: true
  private _garden?: boolean | cdktf.IResolvable; 
  public get garden() {
    return this.getBooleanAttribute('garden');
  }
  public set garden(value: boolean | cdktf.IResolvable) {
    this._garden = value;
  }
  // Temporarily expose input value. Use with caution.
  public get gardenInput() {
    return this._garden;
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

  // podman - computed: false, optional: false, required: true
  private _podman?: boolean | cdktf.IResolvable; 
  public get podman() {
    return this.getBooleanAttribute('podman');
  }
  public set podman(value: boolean | cdktf.IResolvable) {
    this._podman = value;
  }
  // Temporarily expose input value. Use with caution.
  public get podmanInput() {
    return this._podman;
  }

  // scope - computed: false, optional: true, required: false
  private _scope?: string; 
  public get scope() {
    return this.getStringAttribute('scope');
  }
  public set scope(value: string) {
    this._scope = value;
  }
  public resetScope() {
    this._scope = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scopeInput() {
    return this._scope;
  }

  // winc - computed: false, optional: false, required: true
  private _winc?: boolean | cdktf.IResolvable; 
  public get winc() {
    return this.getBooleanAttribute('winc');
  }
  public set winc(value: boolean | cdktf.IResolvable) {
    this._winc = value;
  }
  // Temporarily expose input value. Use with caution.
  public get wincInput() {
    return this._winc;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      bosh_process_manager: cdktf.booleanToTerraform(this._boshProcessManager),
      containerd: cdktf.booleanToTerraform(this._containerd),
      crio: cdktf.booleanToTerraform(this._crio),
      docker: cdktf.booleanToTerraform(this._docker),
      docker_windows: cdktf.booleanToTerraform(this._dockerWindows),
      garden: cdktf.booleanToTerraform(this._garden),
      id: cdktf.stringToTerraform(this._id),
      podman: cdktf.booleanToTerraform(this._podman),
      scope: cdktf.stringToTerraform(this._scope),
      winc: cdktf.booleanToTerraform(this._winc),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      bosh_process_manager: {
        value: cdktf.booleanToHclTerraform(this._boshProcessManager),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      containerd: {
        value: cdktf.booleanToHclTerraform(this._containerd),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      crio: {
        value: cdktf.booleanToHclTerraform(this._crio),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      docker: {
        value: cdktf.booleanToHclTerraform(this._docker),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      docker_windows: {
        value: cdktf.booleanToHclTerraform(this._dockerWindows),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      garden: {
        value: cdktf.booleanToHclTerraform(this._garden),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      podman: {
        value: cdktf.booleanToHclTerraform(this._podman),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      scope: {
        value: cdktf.stringToHclTerraform(this._scope),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      winc: {
        value: cdktf.booleanToHclTerraform(this._winc),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
