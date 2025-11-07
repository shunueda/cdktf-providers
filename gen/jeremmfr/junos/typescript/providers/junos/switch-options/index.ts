// https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/switch_options
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SwitchOptionsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Clean supported lines when destroy this resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/switch_options#clean_on_destroy SwitchOptions#clean_on_destroy}
  */
  readonly cleanOnDestroy?: boolean | cdktf.IResolvable;
  /**
  * Configure static remote VXLAN tunnel endpoints.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/switch_options#remote_vtep_list SwitchOptions#remote_vtep_list}
  */
  readonly remoteVtepList?: string[];
  /**
  * Configure static ipv6 remote VXLAN tunnel endpoints.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/switch_options#remote_vtep_v6_list SwitchOptions#remote_vtep_v6_list}
  */
  readonly remoteVtepV6List?: string[];
  /**
  * Service ID required if multi-chassis AE is part of a bridge-domain.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/switch_options#service_id SwitchOptions#service_id}
  */
  readonly serviceId?: number;
  /**
  * Source layer-3 IFL for VXLAN.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/switch_options#vtep_source_interface SwitchOptions#vtep_source_interface}
  */
  readonly vtepSourceInterface?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/switch_options junos_switch_options}
*/
export class SwitchOptions extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "junos_switch_options";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SwitchOptions resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SwitchOptions to import
  * @param importFromId The id of the existing SwitchOptions that should be imported. Refer to the {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/switch_options#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SwitchOptions to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "junos_switch_options", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/switch_options junos_switch_options} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SwitchOptionsConfig = {}
  */
  public constructor(scope: Construct, id: string, config: SwitchOptionsConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'junos_switch_options',
      terraformGeneratorMetadata: {
        providerName: 'junos',
        providerVersion: '2.15.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._cleanOnDestroy = config.cleanOnDestroy;
    this._remoteVtepList = config.remoteVtepList;
    this._remoteVtepV6List = config.remoteVtepV6List;
    this._serviceId = config.serviceId;
    this._vtepSourceInterface = config.vtepSourceInterface;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // clean_on_destroy - computed: false, optional: true, required: false
  private _cleanOnDestroy?: boolean | cdktf.IResolvable; 
  public get cleanOnDestroy() {
    return this.getBooleanAttribute('clean_on_destroy');
  }
  public set cleanOnDestroy(value: boolean | cdktf.IResolvable) {
    this._cleanOnDestroy = value;
  }
  public resetCleanOnDestroy() {
    this._cleanOnDestroy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cleanOnDestroyInput() {
    return this._cleanOnDestroy;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // remote_vtep_list - computed: false, optional: true, required: false
  private _remoteVtepList?: string[]; 
  public get remoteVtepList() {
    return cdktf.Fn.tolist(this.getListAttribute('remote_vtep_list'));
  }
  public set remoteVtepList(value: string[]) {
    this._remoteVtepList = value;
  }
  public resetRemoteVtepList() {
    this._remoteVtepList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get remoteVtepListInput() {
    return this._remoteVtepList;
  }

  // remote_vtep_v6_list - computed: false, optional: true, required: false
  private _remoteVtepV6List?: string[]; 
  public get remoteVtepV6List() {
    return cdktf.Fn.tolist(this.getListAttribute('remote_vtep_v6_list'));
  }
  public set remoteVtepV6List(value: string[]) {
    this._remoteVtepV6List = value;
  }
  public resetRemoteVtepV6List() {
    this._remoteVtepV6List = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get remoteVtepV6ListInput() {
    return this._remoteVtepV6List;
  }

  // service_id - computed: false, optional: true, required: false
  private _serviceId?: number; 
  public get serviceId() {
    return this.getNumberAttribute('service_id');
  }
  public set serviceId(value: number) {
    this._serviceId = value;
  }
  public resetServiceId() {
    this._serviceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceIdInput() {
    return this._serviceId;
  }

  // vtep_source_interface - computed: false, optional: true, required: false
  private _vtepSourceInterface?: string; 
  public get vtepSourceInterface() {
    return this.getStringAttribute('vtep_source_interface');
  }
  public set vtepSourceInterface(value: string) {
    this._vtepSourceInterface = value;
  }
  public resetVtepSourceInterface() {
    this._vtepSourceInterface = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vtepSourceInterfaceInput() {
    return this._vtepSourceInterface;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      clean_on_destroy: cdktf.booleanToTerraform(this._cleanOnDestroy),
      remote_vtep_list: cdktf.listMapper(cdktf.stringToTerraform, false)(this._remoteVtepList),
      remote_vtep_v6_list: cdktf.listMapper(cdktf.stringToTerraform, false)(this._remoteVtepV6List),
      service_id: cdktf.numberToTerraform(this._serviceId),
      vtep_source_interface: cdktf.stringToTerraform(this._vtepSourceInterface),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      clean_on_destroy: {
        value: cdktf.booleanToHclTerraform(this._cleanOnDestroy),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      remote_vtep_list: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._remoteVtepList),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      remote_vtep_v6_list: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._remoteVtepV6List),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      service_id: {
        value: cdktf.numberToHclTerraform(this._serviceId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      vtep_source_interface: {
        value: cdktf.stringToHclTerraform(this._vtepSourceInterface),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
