// https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/aws_tgw_intra_domain_inspection
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AwsTgwIntraDomainInspectionConfig extends cdktf.TerraformMetaArguments {
  /**
  * Firewall domain name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/aws_tgw_intra_domain_inspection#firewall_domain_name AwsTgwIntraDomainInspection#firewall_domain_name}
  */
  readonly firewallDomainName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/aws_tgw_intra_domain_inspection#id AwsTgwIntraDomainInspection#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Route domain name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/aws_tgw_intra_domain_inspection#route_domain_name AwsTgwIntraDomainInspection#route_domain_name}
  */
  readonly routeDomainName: string;
  /**
  * AWS TGW name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/aws_tgw_intra_domain_inspection#tgw_name AwsTgwIntraDomainInspection#tgw_name}
  */
  readonly tgwName: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/aws_tgw_intra_domain_inspection aviatrix_aws_tgw_intra_domain_inspection}
*/
export class AwsTgwIntraDomainInspection extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aviatrix_aws_tgw_intra_domain_inspection";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a AwsTgwIntraDomainInspection resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AwsTgwIntraDomainInspection to import
  * @param importFromId The id of the existing AwsTgwIntraDomainInspection that should be imported. Refer to the {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/aws_tgw_intra_domain_inspection#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AwsTgwIntraDomainInspection to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aviatrix_aws_tgw_intra_domain_inspection", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/aws_tgw_intra_domain_inspection aviatrix_aws_tgw_intra_domain_inspection} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AwsTgwIntraDomainInspectionConfig
  */
  public constructor(scope: Construct, id: string, config: AwsTgwIntraDomainInspectionConfig) {
    super(scope, id, {
      terraformResourceType: 'aviatrix_aws_tgw_intra_domain_inspection',
      terraformGeneratorMetadata: {
        providerName: 'aviatrix',
        providerVersion: '8.1.10',
        providerVersionConstraint: '8.1.10'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._firewallDomainName = config.firewallDomainName;
    this._id = config.id;
    this._routeDomainName = config.routeDomainName;
    this._tgwName = config.tgwName;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // firewall_domain_name - computed: false, optional: false, required: true
  private _firewallDomainName?: string; 
  public get firewallDomainName() {
    return this.getStringAttribute('firewall_domain_name');
  }
  public set firewallDomainName(value: string) {
    this._firewallDomainName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get firewallDomainNameInput() {
    return this._firewallDomainName;
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

  // route_domain_name - computed: false, optional: false, required: true
  private _routeDomainName?: string; 
  public get routeDomainName() {
    return this.getStringAttribute('route_domain_name');
  }
  public set routeDomainName(value: string) {
    this._routeDomainName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get routeDomainNameInput() {
    return this._routeDomainName;
  }

  // tgw_name - computed: false, optional: false, required: true
  private _tgwName?: string; 
  public get tgwName() {
    return this.getStringAttribute('tgw_name');
  }
  public set tgwName(value: string) {
    this._tgwName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tgwNameInput() {
    return this._tgwName;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      firewall_domain_name: cdktf.stringToTerraform(this._firewallDomainName),
      id: cdktf.stringToTerraform(this._id),
      route_domain_name: cdktf.stringToTerraform(this._routeDomainName),
      tgw_name: cdktf.stringToTerraform(this._tgwName),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      firewall_domain_name: {
        value: cdktf.stringToHclTerraform(this._firewallDomainName),
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
      route_domain_name: {
        value: cdktf.stringToHclTerraform(this._routeDomainName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tgw_name: {
        value: cdktf.stringToHclTerraform(this._tgwName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
