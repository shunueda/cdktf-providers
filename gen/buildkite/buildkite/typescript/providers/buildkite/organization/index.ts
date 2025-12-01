// https://registry.terraform.io/providers/buildkite/buildkite/1.27.1/docs/resources/organization
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface OrganizationConfig extends cdktf.TerraformMetaArguments {
  /**
  * A list of IP addresses in CIDR format that are allowed to access the Buildkite API.If not set, all IP addresses are allowed (the same as setting 0.0.0.0/0).
  * 
  * -> The "Allowed API IP Addresses" feature must be enabled on your organization in order to manage the `allowed_api_ip_addresses` attribute.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/buildkite/buildkite/1.27.1/docs/resources/organization#allowed_api_ip_addresses Organization#allowed_api_ip_addresses}
  */
  readonly allowedApiIpAddresses?: string[];
  /**
  * Sets whether the organization requires two-factor authentication for all members.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/buildkite/buildkite/1.27.1/docs/resources/organization#enforce_2fa Organization#enforce_2fa}
  */
  readonly enforce2Fa?: boolean | cdktf.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/buildkite/buildkite/1.27.1/docs/resources/organization buildkite_organization}
*/
export class Organization extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "buildkite_organization";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Organization resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Organization to import
  * @param importFromId The id of the existing Organization that should be imported. Refer to the {@link https://registry.terraform.io/providers/buildkite/buildkite/1.27.1/docs/resources/organization#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Organization to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "buildkite_organization", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/buildkite/buildkite/1.27.1/docs/resources/organization buildkite_organization} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options OrganizationConfig = {}
  */
  public constructor(scope: Construct, id: string, config: OrganizationConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'buildkite_organization',
      terraformGeneratorMetadata: {
        providerName: 'buildkite',
        providerVersion: '1.27.1',
        providerVersionConstraint: '1.27.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._allowedApiIpAddresses = config.allowedApiIpAddresses;
    this._enforce2Fa = config.enforce2Fa;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // allowed_api_ip_addresses - computed: false, optional: true, required: false
  private _allowedApiIpAddresses?: string[]; 
  public get allowedApiIpAddresses() {
    return this.getListAttribute('allowed_api_ip_addresses');
  }
  public set allowedApiIpAddresses(value: string[]) {
    this._allowedApiIpAddresses = value;
  }
  public resetAllowedApiIpAddresses() {
    this._allowedApiIpAddresses = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedApiIpAddressesInput() {
    return this._allowedApiIpAddresses;
  }

  // enforce_2fa - computed: true, optional: true, required: false
  private _enforce2Fa?: boolean | cdktf.IResolvable; 
  public get enforce2Fa() {
    return this.getBooleanAttribute('enforce_2fa');
  }
  public set enforce2Fa(value: boolean | cdktf.IResolvable) {
    this._enforce2Fa = value;
  }
  public resetEnforce2Fa() {
    this._enforce2Fa = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enforce2FaInput() {
    return this._enforce2Fa;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // uuid - computed: true, optional: false, required: false
  public get uuid() {
    return this.getStringAttribute('uuid');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      allowed_api_ip_addresses: cdktf.listMapper(cdktf.stringToTerraform, false)(this._allowedApiIpAddresses),
      enforce_2fa: cdktf.booleanToTerraform(this._enforce2Fa),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      allowed_api_ip_addresses: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._allowedApiIpAddresses),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      enforce_2fa: {
        value: cdktf.booleanToHclTerraform(this._enforce2Fa),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
