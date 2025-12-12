// https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/apsarastack_vpc_dhcp_options_set
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ApsarastackVpcDhcpOptionsSetConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/apsarastack_vpc_dhcp_options_set#associate_vpcs ApsarastackVpcDhcpOptionsSet#associate_vpcs}
  */
  readonly associateVpcs?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/apsarastack_vpc_dhcp_options_set#dhcp_options_set_description ApsarastackVpcDhcpOptionsSet#dhcp_options_set_description}
  */
  readonly dhcpOptionsSetDescription?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/apsarastack_vpc_dhcp_options_set#dhcp_options_set_name ApsarastackVpcDhcpOptionsSet#dhcp_options_set_name}
  */
  readonly dhcpOptionsSetName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/apsarastack_vpc_dhcp_options_set#domain_name ApsarastackVpcDhcpOptionsSet#domain_name}
  */
  readonly domainName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/apsarastack_vpc_dhcp_options_set#domain_name_servers ApsarastackVpcDhcpOptionsSet#domain_name_servers}
  */
  readonly domainNameServers?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/apsarastack_vpc_dhcp_options_set#id ApsarastackVpcDhcpOptionsSet#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/apsarastack_vpc_dhcp_options_set apsarastack_vpc_dhcp_options_set}
*/
export class ApsarastackVpcDhcpOptionsSet extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "apsarastack_vpc_dhcp_options_set";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ApsarastackVpcDhcpOptionsSet resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ApsarastackVpcDhcpOptionsSet to import
  * @param importFromId The id of the existing ApsarastackVpcDhcpOptionsSet that should be imported. Refer to the {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/apsarastack_vpc_dhcp_options_set#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ApsarastackVpcDhcpOptionsSet to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "apsarastack_vpc_dhcp_options_set", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/apsarastack_vpc_dhcp_options_set apsarastack_vpc_dhcp_options_set} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ApsarastackVpcDhcpOptionsSetConfig = {}
  */
  public constructor(scope: Construct, id: string, config: ApsarastackVpcDhcpOptionsSetConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'apsarastack_vpc_dhcp_options_set',
      terraformGeneratorMetadata: {
        providerName: 'alibabacloudstack',
        providerVersion: '3.18.21',
        providerVersionConstraint: '3.18.21'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._associateVpcs = config.associateVpcs;
    this._dhcpOptionsSetDescription = config.dhcpOptionsSetDescription;
    this._dhcpOptionsSetName = config.dhcpOptionsSetName;
    this._domainName = config.domainName;
    this._domainNameServers = config.domainNameServers;
    this._id = config.id;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // associate_vpcs - computed: true, optional: true, required: false
  private _associateVpcs?: string[]; 
  public get associateVpcs() {
    return cdktf.Fn.tolist(this.getListAttribute('associate_vpcs'));
  }
  public set associateVpcs(value: string[]) {
    this._associateVpcs = value;
  }
  public resetAssociateVpcs() {
    this._associateVpcs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get associateVpcsInput() {
    return this._associateVpcs;
  }

  // dhcp_options_set_description - computed: false, optional: true, required: false
  private _dhcpOptionsSetDescription?: string; 
  public get dhcpOptionsSetDescription() {
    return this.getStringAttribute('dhcp_options_set_description');
  }
  public set dhcpOptionsSetDescription(value: string) {
    this._dhcpOptionsSetDescription = value;
  }
  public resetDhcpOptionsSetDescription() {
    this._dhcpOptionsSetDescription = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dhcpOptionsSetDescriptionInput() {
    return this._dhcpOptionsSetDescription;
  }

  // dhcp_options_set_id - computed: true, optional: false, required: false
  public get dhcpOptionsSetId() {
    return this.getStringAttribute('dhcp_options_set_id');
  }

  // dhcp_options_set_name - computed: false, optional: true, required: false
  private _dhcpOptionsSetName?: string; 
  public get dhcpOptionsSetName() {
    return this.getStringAttribute('dhcp_options_set_name');
  }
  public set dhcpOptionsSetName(value: string) {
    this._dhcpOptionsSetName = value;
  }
  public resetDhcpOptionsSetName() {
    this._dhcpOptionsSetName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dhcpOptionsSetNameInput() {
    return this._dhcpOptionsSetName;
  }

  // domain_name - computed: false, optional: true, required: false
  private _domainName?: string; 
  public get domainName() {
    return this.getStringAttribute('domain_name');
  }
  public set domainName(value: string) {
    this._domainName = value;
  }
  public resetDomainName() {
    this._domainName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get domainNameInput() {
    return this._domainName;
  }

  // domain_name_servers - computed: false, optional: true, required: false
  private _domainNameServers?: string; 
  public get domainNameServers() {
    return this.getStringAttribute('domain_name_servers');
  }
  public set domainNameServers(value: string) {
    this._domainNameServers = value;
  }
  public resetDomainNameServers() {
    this._domainNameServers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get domainNameServersInput() {
    return this._domainNameServers;
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

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      associate_vpcs: cdktf.listMapper(cdktf.stringToTerraform, false)(this._associateVpcs),
      dhcp_options_set_description: cdktf.stringToTerraform(this._dhcpOptionsSetDescription),
      dhcp_options_set_name: cdktf.stringToTerraform(this._dhcpOptionsSetName),
      domain_name: cdktf.stringToTerraform(this._domainName),
      domain_name_servers: cdktf.stringToTerraform(this._domainNameServers),
      id: cdktf.stringToTerraform(this._id),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      associate_vpcs: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._associateVpcs),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      dhcp_options_set_description: {
        value: cdktf.stringToHclTerraform(this._dhcpOptionsSetDescription),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dhcp_options_set_name: {
        value: cdktf.stringToHclTerraform(this._dhcpOptionsSetName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      domain_name: {
        value: cdktf.stringToHclTerraform(this._domainName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      domain_name_servers: {
        value: cdktf.stringToHclTerraform(this._domainNameServers),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
