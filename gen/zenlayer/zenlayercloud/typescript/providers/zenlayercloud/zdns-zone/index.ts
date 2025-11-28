// https://registry.terraform.io/providers/zenlayer/zenlayercloud/0.2.14/docs/resources/zdns_zone
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ZdnsZoneConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zenlayer/zenlayercloud/0.2.14/docs/resources/zdns_zone#id ZdnsZone#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The recursive DNS proxy setting for subdomains. Default: `ZONE`. Valid values: 
  * 	- `ZONE`: Disable recursive DNS proxy. When resolving non-existent subdomains under this domain, it directly returns NXDOMAIN, indicating the subdomain does not exist. 
  * 	- `RECURSION`: Enable recursive DNS proxy. When resolving non-existent subdomains under this domain, it queries the recursive module and responds to the resolution request with the final query result.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zenlayer/zenlayercloud/0.2.14/docs/resources/zdns_zone#proxy_pattern ZdnsZone#proxy_pattern}
  */
  readonly proxyPattern?: string;
  /**
  * Remarks.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zenlayer/zenlayercloud/0.2.14/docs/resources/zdns_zone#remark ZdnsZone#remark}
  */
  readonly remark?: string;
  /**
  * The resource group id the private zone belongs to, default to Default Resource Group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zenlayer/zenlayercloud/0.2.14/docs/resources/zdns_zone#resource_group_id ZdnsZone#resource_group_id}
  */
  readonly resourceGroupId?: string;
  /**
  * The name of the private zone.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zenlayer/zenlayercloud/0.2.14/docs/resources/zdns_zone#zone_name ZdnsZone#zone_name}
  */
  readonly zoneName: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/zenlayer/zenlayercloud/0.2.14/docs/resources/zdns_zone zenlayercloud_zdns_zone}
*/
export class ZdnsZone extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "zenlayercloud_zdns_zone";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ZdnsZone resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ZdnsZone to import
  * @param importFromId The id of the existing ZdnsZone that should be imported. Refer to the {@link https://registry.terraform.io/providers/zenlayer/zenlayercloud/0.2.14/docs/resources/zdns_zone#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ZdnsZone to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "zenlayercloud_zdns_zone", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/zenlayer/zenlayercloud/0.2.14/docs/resources/zdns_zone zenlayercloud_zdns_zone} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ZdnsZoneConfig
  */
  public constructor(scope: Construct, id: string, config: ZdnsZoneConfig) {
    super(scope, id, {
      terraformResourceType: 'zenlayercloud_zdns_zone',
      terraformGeneratorMetadata: {
        providerName: 'zenlayercloud',
        providerVersion: '0.2.14',
        providerVersionConstraint: '0.2.14'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._id = config.id;
    this._proxyPattern = config.proxyPattern;
    this._remark = config.remark;
    this._resourceGroupId = config.resourceGroupId;
    this._zoneName = config.zoneName;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // create_time - computed: true, optional: false, required: false
  public get createTime() {
    return this.getStringAttribute('create_time');
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

  // proxy_pattern - computed: true, optional: true, required: false
  private _proxyPattern?: string; 
  public get proxyPattern() {
    return this.getStringAttribute('proxy_pattern');
  }
  public set proxyPattern(value: string) {
    this._proxyPattern = value;
  }
  public resetProxyPattern() {
    this._proxyPattern = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get proxyPatternInput() {
    return this._proxyPattern;
  }

  // remark - computed: false, optional: true, required: false
  private _remark?: string; 
  public get remark() {
    return this.getStringAttribute('remark');
  }
  public set remark(value: string) {
    this._remark = value;
  }
  public resetRemark() {
    this._remark = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get remarkInput() {
    return this._remark;
  }

  // resource_group_id - computed: true, optional: true, required: false
  private _resourceGroupId?: string; 
  public get resourceGroupId() {
    return this.getStringAttribute('resource_group_id');
  }
  public set resourceGroupId(value: string) {
    this._resourceGroupId = value;
  }
  public resetResourceGroupId() {
    this._resourceGroupId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceGroupIdInput() {
    return this._resourceGroupId;
  }

  // resource_group_name - computed: true, optional: false, required: false
  public get resourceGroupName() {
    return this.getStringAttribute('resource_group_name');
  }

  // zone_name - computed: false, optional: false, required: true
  private _zoneName?: string; 
  public get zoneName() {
    return this.getStringAttribute('zone_name');
  }
  public set zoneName(value: string) {
    this._zoneName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get zoneNameInput() {
    return this._zoneName;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      proxy_pattern: cdktf.stringToTerraform(this._proxyPattern),
      remark: cdktf.stringToTerraform(this._remark),
      resource_group_id: cdktf.stringToTerraform(this._resourceGroupId),
      zone_name: cdktf.stringToTerraform(this._zoneName),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      proxy_pattern: {
        value: cdktf.stringToHclTerraform(this._proxyPattern),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      remark: {
        value: cdktf.stringToHclTerraform(this._remark),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      resource_group_id: {
        value: cdktf.stringToHclTerraform(this._resourceGroupId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      zone_name: {
        value: cdktf.stringToHclTerraform(this._zoneName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
