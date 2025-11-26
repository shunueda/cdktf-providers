// generated from terraform resource schema

import { LogicalRouterVrf, 
logicalRouterVrfToTerraform, 
logicalRouterVrfToHclTerraform, 
LogicalRouterVrfList} from './index-structs'
export * from './index-structs'
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface LogicalRouterConfig extends cdktf.TerraformMetaArguments {
  /**
  * The device in which the resource is defined
  * 
  * > ℹ️ **Note:** You must specify exactly one of `device`, `folder`, and `snippet`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/logical_router#device LogicalRouter#device}
  */
  readonly device?: string;
  /**
  * The folder in which the resource is defined
  * 
  * > ℹ️ **Note:** You must specify exactly one of `device`, `folder`, and `snippet`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/logical_router#folder LogicalRouter#folder}
  */
  readonly folder?: string;
  /**
  * Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/logical_router#name LogicalRouter#name}
  */
  readonly name: string;
  /**
  * Routing stack
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/logical_router#routing_stack LogicalRouter#routing_stack}
  */
  readonly routingStack?: string;
  /**
  * The snippet in which the resource is defined
  * 
  * > ℹ️ **Note:** You must specify exactly one of `device`, `folder`, and `snippet`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/logical_router#snippet LogicalRouter#snippet}
  */
  readonly snippet?: string;
  /**
  * Vrf
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/logical_router#vrf LogicalRouter#vrf}
  */
  readonly vrf?: LogicalRouterVrf[] | cdktf.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/logical_router scm_logical_router}
*/
export class LogicalRouter extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "scm_logical_router";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a LogicalRouter resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the LogicalRouter to import
  * @param importFromId The id of the existing LogicalRouter that should be imported. Refer to the {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/logical_router#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the LogicalRouter to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "scm_logical_router", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/logical_router scm_logical_router} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options LogicalRouterConfig
  */
  public constructor(scope: Construct, id: string, config: LogicalRouterConfig) {
    super(scope, id, {
      terraformResourceType: 'scm_logical_router',
      terraformGeneratorMetadata: {
        providerName: 'scm',
        providerVersion: '1.0.5',
        providerVersionConstraint: '1.0.5'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._device = config.device;
    this._folder = config.folder;
    this._name = config.name;
    this._routingStack = config.routingStack;
    this._snippet = config.snippet;
    this._vrf.internalValue = config.vrf;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // device - computed: false, optional: true, required: false
  private _device?: string; 
  public get device() {
    return this.getStringAttribute('device');
  }
  public set device(value: string) {
    this._device = value;
  }
  public resetDevice() {
    this._device = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceInput() {
    return this._device;
  }

  // folder - computed: false, optional: true, required: false
  private _folder?: string; 
  public get folder() {
    return this.getStringAttribute('folder');
  }
  public set folder(value: string) {
    this._folder = value;
  }
  public resetFolder() {
    this._folder = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get folderInput() {
    return this._folder;
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

  // routing_stack - computed: false, optional: true, required: false
  private _routingStack?: string; 
  public get routingStack() {
    return this.getStringAttribute('routing_stack');
  }
  public set routingStack(value: string) {
    this._routingStack = value;
  }
  public resetRoutingStack() {
    this._routingStack = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routingStackInput() {
    return this._routingStack;
  }

  // snippet - computed: false, optional: true, required: false
  private _snippet?: string; 
  public get snippet() {
    return this.getStringAttribute('snippet');
  }
  public set snippet(value: string) {
    this._snippet = value;
  }
  public resetSnippet() {
    this._snippet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snippetInput() {
    return this._snippet;
  }

  // tfid - computed: true, optional: false, required: false
  public get tfid() {
    return this.getStringAttribute('tfid');
  }

  // vrf - computed: false, optional: true, required: false
  private _vrf = new LogicalRouterVrfList(this, "vrf", false);
  public get vrf() {
    return this._vrf;
  }
  public putVrf(value: LogicalRouterVrf[] | cdktf.IResolvable) {
    this._vrf.internalValue = value;
  }
  public resetVrf() {
    this._vrf.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vrfInput() {
    return this._vrf.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      device: cdktf.stringToTerraform(this._device),
      folder: cdktf.stringToTerraform(this._folder),
      name: cdktf.stringToTerraform(this._name),
      routing_stack: cdktf.stringToTerraform(this._routingStack),
      snippet: cdktf.stringToTerraform(this._snippet),
      vrf: cdktf.listMapper(logicalRouterVrfToTerraform, false)(this._vrf.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      device: {
        value: cdktf.stringToHclTerraform(this._device),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      folder: {
        value: cdktf.stringToHclTerraform(this._folder),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      routing_stack: {
        value: cdktf.stringToHclTerraform(this._routingStack),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      snippet: {
        value: cdktf.stringToHclTerraform(this._snippet),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vrf: {
        value: cdktf.listMapperHcl(logicalRouterVrfToHclTerraform, false)(this._vrf.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "LogicalRouterVrfList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
