// https://registry.terraform.io/providers/ovh/ovh/2.10.0/docs/resources/domain_zone_dynhost_record
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DomainZoneDynhostRecordConfig extends cdktf.TerraformMetaArguments {
  /**
  * Record IP
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.10.0/docs/resources/domain_zone_dynhost_record#ip DomainZoneDynhostRecord#ip}
  */
  readonly ip?: string;
  /**
  * Record sub-domain
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.10.0/docs/resources/domain_zone_dynhost_record#sub_domain DomainZoneDynhostRecord#sub_domain}
  */
  readonly subDomain?: string;
  /**
  * Zone name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.10.0/docs/resources/domain_zone_dynhost_record#zone_name DomainZoneDynhostRecord#zone_name}
  */
  readonly zoneName: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/ovh/ovh/2.10.0/docs/resources/domain_zone_dynhost_record ovh_domain_zone_dynhost_record}
*/
export class DomainZoneDynhostRecord extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "ovh_domain_zone_dynhost_record";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DomainZoneDynhostRecord resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DomainZoneDynhostRecord to import
  * @param importFromId The id of the existing DomainZoneDynhostRecord that should be imported. Refer to the {@link https://registry.terraform.io/providers/ovh/ovh/2.10.0/docs/resources/domain_zone_dynhost_record#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DomainZoneDynhostRecord to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "ovh_domain_zone_dynhost_record", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ovh/ovh/2.10.0/docs/resources/domain_zone_dynhost_record ovh_domain_zone_dynhost_record} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DomainZoneDynhostRecordConfig
  */
  public constructor(scope: Construct, id: string, config: DomainZoneDynhostRecordConfig) {
    super(scope, id, {
      terraformResourceType: 'ovh_domain_zone_dynhost_record',
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
    this._ip = config.ip;
    this._subDomain = config.subDomain;
    this._zoneName = config.zoneName;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getNumberAttribute('id');
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

  // sub_domain - computed: true, optional: true, required: false
  private _subDomain?: string; 
  public get subDomain() {
    return this.getStringAttribute('sub_domain');
  }
  public set subDomain(value: string) {
    this._subDomain = value;
  }
  public resetSubDomain() {
    this._subDomain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subDomainInput() {
    return this._subDomain;
  }

  // ttl - computed: true, optional: false, required: false
  public get ttl() {
    return this.getNumberAttribute('ttl');
  }

  // zone - computed: true, optional: false, required: false
  public get zone() {
    return this.getStringAttribute('zone');
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
      ip: cdktf.stringToTerraform(this._ip),
      sub_domain: cdktf.stringToTerraform(this._subDomain),
      zone_name: cdktf.stringToTerraform(this._zoneName),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      ip: {
        value: cdktf.stringToHclTerraform(this._ip),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sub_domain: {
        value: cdktf.stringToHclTerraform(this._subDomain),
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
