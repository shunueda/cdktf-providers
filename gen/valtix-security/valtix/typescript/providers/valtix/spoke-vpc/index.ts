// https://registry.terraform.io/providers/valtix-security/valtix/25.9.2/docs/resources/spoke_vpc
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SpokeVpcConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/valtix-security/valtix/25.9.2/docs/resources/spoke_vpc#id SpokeVpc#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/valtix-security/valtix/25.9.2/docs/resources/spoke_vpc#service_vpc_id SpokeVpc#service_vpc_id}
  */
  readonly serviceVpcId: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/valtix-security/valtix/25.9.2/docs/resources/spoke_vpc#spoke_vpc_csp_account_name SpokeVpc#spoke_vpc_csp_account_name}
  */
  readonly spokeVpcCspAccountName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/valtix-security/valtix/25.9.2/docs/resources/spoke_vpc#spoke_vpc_id SpokeVpc#spoke_vpc_id}
  */
  readonly spokeVpcId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/valtix-security/valtix/25.9.2/docs/resources/spoke_vpc#spoke_vpc_region SpokeVpc#spoke_vpc_region}
  */
  readonly spokeVpcRegion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/valtix-security/valtix/25.9.2/docs/resources/spoke_vpc#transit_gateway_attachment_subnets SpokeVpc#transit_gateway_attachment_subnets}
  */
  readonly transitGatewayAttachmentSubnets?: string[];
}

/**
* Represents a {@link https://registry.terraform.io/providers/valtix-security/valtix/25.9.2/docs/resources/spoke_vpc valtix_spoke_vpc}
*/
export class SpokeVpc extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "valtix_spoke_vpc";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SpokeVpc resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SpokeVpc to import
  * @param importFromId The id of the existing SpokeVpc that should be imported. Refer to the {@link https://registry.terraform.io/providers/valtix-security/valtix/25.9.2/docs/resources/spoke_vpc#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SpokeVpc to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "valtix_spoke_vpc", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/valtix-security/valtix/25.9.2/docs/resources/spoke_vpc valtix_spoke_vpc} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SpokeVpcConfig
  */
  public constructor(scope: Construct, id: string, config: SpokeVpcConfig) {
    super(scope, id, {
      terraformResourceType: 'valtix_spoke_vpc',
      terraformGeneratorMetadata: {
        providerName: 'valtix',
        providerVersion: '25.9.2',
        providerVersionConstraint: '25.9.2'
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
    this._serviceVpcId = config.serviceVpcId;
    this._spokeVpcCspAccountName = config.spokeVpcCspAccountName;
    this._spokeVpcId = config.spokeVpcId;
    this._spokeVpcRegion = config.spokeVpcRegion;
    this._transitGatewayAttachmentSubnets = config.transitGatewayAttachmentSubnets;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // service_vpc_id - computed: false, optional: false, required: true
  private _serviceVpcId?: number; 
  public get serviceVpcId() {
    return this.getNumberAttribute('service_vpc_id');
  }
  public set serviceVpcId(value: number) {
    this._serviceVpcId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceVpcIdInput() {
    return this._serviceVpcId;
  }

  // spoke_vpc_csp_account_name - computed: false, optional: true, required: false
  private _spokeVpcCspAccountName?: string; 
  public get spokeVpcCspAccountName() {
    return this.getStringAttribute('spoke_vpc_csp_account_name');
  }
  public set spokeVpcCspAccountName(value: string) {
    this._spokeVpcCspAccountName = value;
  }
  public resetSpokeVpcCspAccountName() {
    this._spokeVpcCspAccountName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get spokeVpcCspAccountNameInput() {
    return this._spokeVpcCspAccountName;
  }

  // spoke_vpc_id - computed: false, optional: false, required: true
  private _spokeVpcId?: string; 
  public get spokeVpcId() {
    return this.getStringAttribute('spoke_vpc_id');
  }
  public set spokeVpcId(value: string) {
    this._spokeVpcId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get spokeVpcIdInput() {
    return this._spokeVpcId;
  }

  // spoke_vpc_region - computed: false, optional: true, required: false
  private _spokeVpcRegion?: string; 
  public get spokeVpcRegion() {
    return this.getStringAttribute('spoke_vpc_region');
  }
  public set spokeVpcRegion(value: string) {
    this._spokeVpcRegion = value;
  }
  public resetSpokeVpcRegion() {
    this._spokeVpcRegion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get spokeVpcRegionInput() {
    return this._spokeVpcRegion;
  }

  // transit_gateway_attachment_subnets - computed: false, optional: true, required: false
  private _transitGatewayAttachmentSubnets?: string[]; 
  public get transitGatewayAttachmentSubnets() {
    return cdktf.Fn.tolist(this.getListAttribute('transit_gateway_attachment_subnets'));
  }
  public set transitGatewayAttachmentSubnets(value: string[]) {
    this._transitGatewayAttachmentSubnets = value;
  }
  public resetTransitGatewayAttachmentSubnets() {
    this._transitGatewayAttachmentSubnets = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get transitGatewayAttachmentSubnetsInput() {
    return this._transitGatewayAttachmentSubnets;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      service_vpc_id: cdktf.numberToTerraform(this._serviceVpcId),
      spoke_vpc_csp_account_name: cdktf.stringToTerraform(this._spokeVpcCspAccountName),
      spoke_vpc_id: cdktf.stringToTerraform(this._spokeVpcId),
      spoke_vpc_region: cdktf.stringToTerraform(this._spokeVpcRegion),
      transit_gateway_attachment_subnets: cdktf.listMapper(cdktf.stringToTerraform, false)(this._transitGatewayAttachmentSubnets),
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
      service_vpc_id: {
        value: cdktf.numberToHclTerraform(this._serviceVpcId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      spoke_vpc_csp_account_name: {
        value: cdktf.stringToHclTerraform(this._spokeVpcCspAccountName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      spoke_vpc_id: {
        value: cdktf.stringToHclTerraform(this._spokeVpcId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      spoke_vpc_region: {
        value: cdktf.stringToHclTerraform(this._spokeVpcRegion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      transit_gateway_attachment_subnets: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._transitGatewayAttachmentSubnets),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
