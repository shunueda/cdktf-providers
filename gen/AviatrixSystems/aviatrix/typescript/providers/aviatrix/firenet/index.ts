// https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.2.0/docs/resources/firenet
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface FirenetConfig extends cdktf.TerraformMetaArguments {
  /**
  * Network List Excluded From East-West Inspection. CIDRs to be excluded from inspection. Type: Set(String). Available as of provider version R2.19.2+.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.2.0/docs/resources/firenet#east_west_inspection_excluded_cidrs Firenet#east_west_inspection_excluded_cidrs}
  */
  readonly eastWestInspectionExcludedCidrs?: string[];
  /**
  * Enable/Disable egress through firewall.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.2.0/docs/resources/firenet#egress_enabled Firenet#egress_enabled}
  */
  readonly egressEnabled?: boolean | cdktf.IResolvable;
  /**
  * List of egress static cidrs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.2.0/docs/resources/firenet#egress_static_cidrs Firenet#egress_static_cidrs}
  */
  readonly egressStaticCidrs?: string[];
  /**
  * Hashing algorithm to load balance traffic across the firewall.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.2.0/docs/resources/firenet#hashing_algorithm Firenet#hashing_algorithm}
  */
  readonly hashingAlgorithm?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.2.0/docs/resources/firenet#id Firenet#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Enable/Disable traffic inspection.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.2.0/docs/resources/firenet#inspection_enabled Firenet#inspection_enabled}
  */
  readonly inspectionEnabled?: boolean | cdktf.IResolvable;
  /**
  * Enable TGW segmentation for egress.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.2.0/docs/resources/firenet#tgw_segmentation_for_egress_enabled Firenet#tgw_segmentation_for_egress_enabled}
  */
  readonly tgwSegmentationForEgressEnabled?: boolean | cdktf.IResolvable;
  /**
  * VPC ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.2.0/docs/resources/firenet#vpc_id Firenet#vpc_id}
  */
  readonly vpcId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.2.0/docs/resources/firenet aviatrix_firenet}
*/
export class Firenet extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aviatrix_firenet";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Firenet resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Firenet to import
  * @param importFromId The id of the existing Firenet that should be imported. Refer to the {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.2.0/docs/resources/firenet#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Firenet to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aviatrix_firenet", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.2.0/docs/resources/firenet aviatrix_firenet} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options FirenetConfig
  */
  public constructor(scope: Construct, id: string, config: FirenetConfig) {
    super(scope, id, {
      terraformResourceType: 'aviatrix_firenet',
      terraformGeneratorMetadata: {
        providerName: 'aviatrix',
        providerVersion: '8.2.0',
        providerVersionConstraint: '8.2.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._eastWestInspectionExcludedCidrs = config.eastWestInspectionExcludedCidrs;
    this._egressEnabled = config.egressEnabled;
    this._egressStaticCidrs = config.egressStaticCidrs;
    this._hashingAlgorithm = config.hashingAlgorithm;
    this._id = config.id;
    this._inspectionEnabled = config.inspectionEnabled;
    this._tgwSegmentationForEgressEnabled = config.tgwSegmentationForEgressEnabled;
    this._vpcId = config.vpcId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // east_west_inspection_excluded_cidrs - computed: false, optional: true, required: false
  private _eastWestInspectionExcludedCidrs?: string[]; 
  public get eastWestInspectionExcludedCidrs() {
    return cdktf.Fn.tolist(this.getListAttribute('east_west_inspection_excluded_cidrs'));
  }
  public set eastWestInspectionExcludedCidrs(value: string[]) {
    this._eastWestInspectionExcludedCidrs = value;
  }
  public resetEastWestInspectionExcludedCidrs() {
    this._eastWestInspectionExcludedCidrs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eastWestInspectionExcludedCidrsInput() {
    return this._eastWestInspectionExcludedCidrs;
  }

  // egress_enabled - computed: false, optional: true, required: false
  private _egressEnabled?: boolean | cdktf.IResolvable; 
  public get egressEnabled() {
    return this.getBooleanAttribute('egress_enabled');
  }
  public set egressEnabled(value: boolean | cdktf.IResolvable) {
    this._egressEnabled = value;
  }
  public resetEgressEnabled() {
    this._egressEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get egressEnabledInput() {
    return this._egressEnabled;
  }

  // egress_static_cidrs - computed: false, optional: true, required: false
  private _egressStaticCidrs?: string[]; 
  public get egressStaticCidrs() {
    return cdktf.Fn.tolist(this.getListAttribute('egress_static_cidrs'));
  }
  public set egressStaticCidrs(value: string[]) {
    this._egressStaticCidrs = value;
  }
  public resetEgressStaticCidrs() {
    this._egressStaticCidrs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get egressStaticCidrsInput() {
    return this._egressStaticCidrs;
  }

  // hashing_algorithm - computed: false, optional: true, required: false
  private _hashingAlgorithm?: string; 
  public get hashingAlgorithm() {
    return this.getStringAttribute('hashing_algorithm');
  }
  public set hashingAlgorithm(value: string) {
    this._hashingAlgorithm = value;
  }
  public resetHashingAlgorithm() {
    this._hashingAlgorithm = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hashingAlgorithmInput() {
    return this._hashingAlgorithm;
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

  // inspection_enabled - computed: false, optional: true, required: false
  private _inspectionEnabled?: boolean | cdktf.IResolvable; 
  public get inspectionEnabled() {
    return this.getBooleanAttribute('inspection_enabled');
  }
  public set inspectionEnabled(value: boolean | cdktf.IResolvable) {
    this._inspectionEnabled = value;
  }
  public resetInspectionEnabled() {
    this._inspectionEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inspectionEnabledInput() {
    return this._inspectionEnabled;
  }

  // tgw_segmentation_for_egress_enabled - computed: false, optional: true, required: false
  private _tgwSegmentationForEgressEnabled?: boolean | cdktf.IResolvable; 
  public get tgwSegmentationForEgressEnabled() {
    return this.getBooleanAttribute('tgw_segmentation_for_egress_enabled');
  }
  public set tgwSegmentationForEgressEnabled(value: boolean | cdktf.IResolvable) {
    this._tgwSegmentationForEgressEnabled = value;
  }
  public resetTgwSegmentationForEgressEnabled() {
    this._tgwSegmentationForEgressEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tgwSegmentationForEgressEnabledInput() {
    return this._tgwSegmentationForEgressEnabled;
  }

  // vpc_id - computed: false, optional: false, required: true
  private _vpcId?: string; 
  public get vpcId() {
    return this.getStringAttribute('vpc_id');
  }
  public set vpcId(value: string) {
    this._vpcId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vpcIdInput() {
    return this._vpcId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      east_west_inspection_excluded_cidrs: cdktf.listMapper(cdktf.stringToTerraform, false)(this._eastWestInspectionExcludedCidrs),
      egress_enabled: cdktf.booleanToTerraform(this._egressEnabled),
      egress_static_cidrs: cdktf.listMapper(cdktf.stringToTerraform, false)(this._egressStaticCidrs),
      hashing_algorithm: cdktf.stringToTerraform(this._hashingAlgorithm),
      id: cdktf.stringToTerraform(this._id),
      inspection_enabled: cdktf.booleanToTerraform(this._inspectionEnabled),
      tgw_segmentation_for_egress_enabled: cdktf.booleanToTerraform(this._tgwSegmentationForEgressEnabled),
      vpc_id: cdktf.stringToTerraform(this._vpcId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      east_west_inspection_excluded_cidrs: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._eastWestInspectionExcludedCidrs),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      egress_enabled: {
        value: cdktf.booleanToHclTerraform(this._egressEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      egress_static_cidrs: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._egressStaticCidrs),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      hashing_algorithm: {
        value: cdktf.stringToHclTerraform(this._hashingAlgorithm),
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
      inspection_enabled: {
        value: cdktf.booleanToHclTerraform(this._inspectionEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      tgw_segmentation_for_egress_enabled: {
        value: cdktf.booleanToHclTerraform(this._tgwSegmentationForEgressEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      vpc_id: {
        value: cdktf.stringToHclTerraform(this._vpcId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
