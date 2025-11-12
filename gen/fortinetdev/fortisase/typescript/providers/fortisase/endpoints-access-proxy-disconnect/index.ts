// https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/resources/endpoints_access_proxy_disconnect
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface EndpointsAccessProxyDisconnectConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/resources/endpoints_access_proxy_disconnect#sn_list EndpointsAccessProxyDisconnect#sn_list}
  */
  readonly snList?: string[];
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/resources/endpoints_access_proxy_disconnect fortisase_endpoints_access_proxy_disconnect}
*/
export class EndpointsAccessProxyDisconnect extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortisase_endpoints_access_proxy_disconnect";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a EndpointsAccessProxyDisconnect resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the EndpointsAccessProxyDisconnect to import
  * @param importFromId The id of the existing EndpointsAccessProxyDisconnect that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/resources/endpoints_access_proxy_disconnect#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the EndpointsAccessProxyDisconnect to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortisase_endpoints_access_proxy_disconnect", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/resources/endpoints_access_proxy_disconnect fortisase_endpoints_access_proxy_disconnect} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options EndpointsAccessProxyDisconnectConfig = {}
  */
  public constructor(scope: Construct, id: string, config: EndpointsAccessProxyDisconnectConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'fortisase_endpoints_access_proxy_disconnect',
      terraformGeneratorMetadata: {
        providerName: 'fortisase',
        providerVersion: '1.0.0',
        providerVersionConstraint: '1.0.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._snList = config.snList;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // sn_list - computed: true, optional: true, required: false
  private _snList?: string[]; 
  public get snList() {
    return cdktf.Fn.tolist(this.getListAttribute('sn_list'));
  }
  public set snList(value: string[]) {
    this._snList = value;
  }
  public resetSnList() {
    this._snList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snListInput() {
    return this._snList;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      sn_list: cdktf.listMapper(cdktf.stringToTerraform, false)(this._snList),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      sn_list: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._snList),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
