// https://registry.terraform.io/providers/ovh/ovh/2.10.0/docs/resources/cloud_project_failover_ip_attach
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CloudProjectFailoverIpAttachConfig extends cdktf.TerraformMetaArguments {
  /**
  * IP block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.10.0/docs/resources/cloud_project_failover_ip_attach#block CloudProjectFailoverIpAttach#block}
  */
  readonly block?: string;
  /**
  * Ip continent
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.10.0/docs/resources/cloud_project_failover_ip_attach#continent_code CloudProjectFailoverIpAttach#continent_code}
  */
  readonly continentCode?: string;
  /**
  * Ip location
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.10.0/docs/resources/cloud_project_failover_ip_attach#geo_loc CloudProjectFailoverIpAttach#geo_loc}
  */
  readonly geoLoc?: string;
  /**
  * Ip
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.10.0/docs/resources/cloud_project_failover_ip_attach#ip CloudProjectFailoverIpAttach#ip}
  */
  readonly ip?: string;
  /**
  * Instance where ip is routed to
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.10.0/docs/resources/cloud_project_failover_ip_attach#routed_to CloudProjectFailoverIpAttach#routed_to}
  */
  readonly routedTo?: string;
  /**
  * The service name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.10.0/docs/resources/cloud_project_failover_ip_attach#service_name CloudProjectFailoverIpAttach#service_name}
  */
  readonly serviceName: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/ovh/ovh/2.10.0/docs/resources/cloud_project_failover_ip_attach ovh_cloud_project_failover_ip_attach}
*/
export class CloudProjectFailoverIpAttach extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "ovh_cloud_project_failover_ip_attach";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CloudProjectFailoverIpAttach resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CloudProjectFailoverIpAttach to import
  * @param importFromId The id of the existing CloudProjectFailoverIpAttach that should be imported. Refer to the {@link https://registry.terraform.io/providers/ovh/ovh/2.10.0/docs/resources/cloud_project_failover_ip_attach#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CloudProjectFailoverIpAttach to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "ovh_cloud_project_failover_ip_attach", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ovh/ovh/2.10.0/docs/resources/cloud_project_failover_ip_attach ovh_cloud_project_failover_ip_attach} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CloudProjectFailoverIpAttachConfig
  */
  public constructor(scope: Construct, id: string, config: CloudProjectFailoverIpAttachConfig) {
    super(scope, id, {
      terraformResourceType: 'ovh_cloud_project_failover_ip_attach',
      terraformGeneratorMetadata: {
        providerName: 'ovh',
        providerVersion: '2.10.0',
        providerVersionConstraint: '2.10.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._block = config.block;
    this._continentCode = config.continentCode;
    this._geoLoc = config.geoLoc;
    this._ip = config.ip;
    this._routedTo = config.routedTo;
    this._serviceName = config.serviceName;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // block - computed: true, optional: true, required: false
  private _block?: string; 
  public get block() {
    return this.getStringAttribute('block');
  }
  public set block(value: string) {
    this._block = value;
  }
  public resetBlock() {
    this._block = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blockInput() {
    return this._block;
  }

  // continent_code - computed: true, optional: true, required: false
  private _continentCode?: string; 
  public get continentCode() {
    return this.getStringAttribute('continent_code');
  }
  public set continentCode(value: string) {
    this._continentCode = value;
  }
  public resetContinentCode() {
    this._continentCode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get continentCodeInput() {
    return this._continentCode;
  }

  // geo_loc - computed: true, optional: true, required: false
  private _geoLoc?: string; 
  public get geoLoc() {
    return this.getStringAttribute('geo_loc');
  }
  public set geoLoc(value: string) {
    this._geoLoc = value;
  }
  public resetGeoLoc() {
    this._geoLoc = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get geoLocInput() {
    return this._geoLoc;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // ip - computed: true, optional: true, required: false
  private _ip?: string; 
  public get ip() {
    return this.getStringAttribute('ip');
  }
  public set ip(value: string) {
    this._ip = value;
  }
  public resetIp() {
    this._ip = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipInput() {
    return this._ip;
  }

  // progress - computed: true, optional: false, required: false
  public get progress() {
    return this.getNumberAttribute('progress');
  }

  // routed_to - computed: true, optional: true, required: false
  private _routedTo?: string; 
  public get routedTo() {
    return this.getStringAttribute('routed_to');
  }
  public set routedTo(value: string) {
    this._routedTo = value;
  }
  public resetRoutedTo() {
    this._routedTo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routedToInput() {
    return this._routedTo;
  }

  // service_name - computed: false, optional: false, required: true
  private _serviceName?: string; 
  public get serviceName() {
    return this.getStringAttribute('service_name');
  }
  public set serviceName(value: string) {
    this._serviceName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceNameInput() {
    return this._serviceName;
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // sub_type - computed: true, optional: false, required: false
  public get subType() {
    return this.getStringAttribute('sub_type');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      block: cdktf.stringToTerraform(this._block),
      continent_code: cdktf.stringToTerraform(this._continentCode),
      geo_loc: cdktf.stringToTerraform(this._geoLoc),
      ip: cdktf.stringToTerraform(this._ip),
      routed_to: cdktf.stringToTerraform(this._routedTo),
      service_name: cdktf.stringToTerraform(this._serviceName),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      block: {
        value: cdktf.stringToHclTerraform(this._block),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      continent_code: {
        value: cdktf.stringToHclTerraform(this._continentCode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      geo_loc: {
        value: cdktf.stringToHclTerraform(this._geoLoc),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ip: {
        value: cdktf.stringToHclTerraform(this._ip),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      routed_to: {
        value: cdktf.stringToHclTerraform(this._routedTo),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      service_name: {
        value: cdktf.stringToHclTerraform(this._serviceName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
