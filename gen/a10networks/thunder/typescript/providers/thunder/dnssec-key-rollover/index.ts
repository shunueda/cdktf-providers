// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/dnssec_key_rollover
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DnssecKeyRolloverAConfig extends cdktf.TerraformMetaArguments {
  /**
  * 'ZSK': Zone Signing Key; 'KSK': Key Signing Key;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/dnssec_key_rollover#dnssec_key_type DnssecKeyRolloverA#dnssec_key_type}
  */
  readonly dnssecKeyType?: string;
  /**
  * DS RR is already ready in the parent zone
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/dnssec_key_rollover#ds_ready_in_parent_zone DnssecKeyRolloverA#ds_ready_in_parent_zone}
  */
  readonly dsReadyInParentZone?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/dnssec_key_rollover#id DnssecKeyRolloverA#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * start KSK rollover in emergency mode
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/dnssec_key_rollover#ksk_start DnssecKeyRolloverA#ksk_start}
  */
  readonly kskStart?: number;
  /**
  * Specify the name for the DNS zone
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/dnssec_key_rollover#zone_name DnssecKeyRolloverA#zone_name}
  */
  readonly zoneName?: string;
  /**
  * start ZSK rollover in emergency mode
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/dnssec_key_rollover#zsk_start DnssecKeyRolloverA#zsk_start}
  */
  readonly zskStart?: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/dnssec_key_rollover thunder_dnssec_key_rollover}
*/
export class DnssecKeyRolloverA extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_dnssec_key_rollover";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DnssecKeyRolloverA resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DnssecKeyRolloverA to import
  * @param importFromId The id of the existing DnssecKeyRolloverA that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/dnssec_key_rollover#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DnssecKeyRolloverA to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_dnssec_key_rollover", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/dnssec_key_rollover thunder_dnssec_key_rollover} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DnssecKeyRolloverAConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DnssecKeyRolloverAConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_dnssec_key_rollover',
      terraformGeneratorMetadata: {
        providerName: 'thunder',
        providerVersion: '1.5.0',
        providerVersionConstraint: '1.5.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._dnssecKeyType = config.dnssecKeyType;
    this._dsReadyInParentZone = config.dsReadyInParentZone;
    this._id = config.id;
    this._kskStart = config.kskStart;
    this._zoneName = config.zoneName;
    this._zskStart = config.zskStart;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // dnssec_key_type - computed: false, optional: true, required: false
  private _dnssecKeyType?: string; 
  public get dnssecKeyType() {
    return this.getStringAttribute('dnssec_key_type');
  }
  public set dnssecKeyType(value: string) {
    this._dnssecKeyType = value;
  }
  public resetDnssecKeyType() {
    this._dnssecKeyType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnssecKeyTypeInput() {
    return this._dnssecKeyType;
  }

  // ds_ready_in_parent_zone - computed: false, optional: true, required: false
  private _dsReadyInParentZone?: number; 
  public get dsReadyInParentZone() {
    return this.getNumberAttribute('ds_ready_in_parent_zone');
  }
  public set dsReadyInParentZone(value: number) {
    this._dsReadyInParentZone = value;
  }
  public resetDsReadyInParentZone() {
    this._dsReadyInParentZone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dsReadyInParentZoneInput() {
    return this._dsReadyInParentZone;
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

  // ksk_start - computed: false, optional: true, required: false
  private _kskStart?: number; 
  public get kskStart() {
    return this.getNumberAttribute('ksk_start');
  }
  public set kskStart(value: number) {
    this._kskStart = value;
  }
  public resetKskStart() {
    this._kskStart = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kskStartInput() {
    return this._kskStart;
  }

  // zone_name - computed: false, optional: true, required: false
  private _zoneName?: string; 
  public get zoneName() {
    return this.getStringAttribute('zone_name');
  }
  public set zoneName(value: string) {
    this._zoneName = value;
  }
  public resetZoneName() {
    this._zoneName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zoneNameInput() {
    return this._zoneName;
  }

  // zsk_start - computed: false, optional: true, required: false
  private _zskStart?: number; 
  public get zskStart() {
    return this.getNumberAttribute('zsk_start');
  }
  public set zskStart(value: number) {
    this._zskStart = value;
  }
  public resetZskStart() {
    this._zskStart = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zskStartInput() {
    return this._zskStart;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      dnssec_key_type: cdktf.stringToTerraform(this._dnssecKeyType),
      ds_ready_in_parent_zone: cdktf.numberToTerraform(this._dsReadyInParentZone),
      id: cdktf.stringToTerraform(this._id),
      ksk_start: cdktf.numberToTerraform(this._kskStart),
      zone_name: cdktf.stringToTerraform(this._zoneName),
      zsk_start: cdktf.numberToTerraform(this._zskStart),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      dnssec_key_type: {
        value: cdktf.stringToHclTerraform(this._dnssecKeyType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ds_ready_in_parent_zone: {
        value: cdktf.numberToHclTerraform(this._dsReadyInParentZone),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ksk_start: {
        value: cdktf.numberToHclTerraform(this._kskStart),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      zone_name: {
        value: cdktf.stringToHclTerraform(this._zoneName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      zsk_start: {
        value: cdktf.numberToHclTerraform(this._zskStart),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
