// https://registry.terraform.io/providers/ciscodevnet/fmc/1.5.2/docs
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface FmcProviderConfig {
  /**
  * The domain uuid to use API of cdFMC the default domain for global is e276abec-e0f2-11e3-8169-6d9ed49b625f
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/fmc/1.5.2/docs#cdfmc_domain_uuid FmcProvider#cdfmc_domain_uuid}
  */
  readonly cdfmcDomainUuid?: string;
  /**
  * The CDO Api token to manage cdFMC
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/fmc/1.5.2/docs#cdo_token FmcProvider#cdo_token}
  */
  readonly cdoToken?: string;
  /**
  * Hostname/IP address of the FMC
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/fmc/1.5.2/docs#fmc_host FmcProvider#fmc_host}
  */
  readonly fmcHost: string;
  /**
  * Skip certificate checks if the certificate is not public CA signed, or if using IP address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/fmc/1.5.2/docs#fmc_insecure_skip_verify FmcProvider#fmc_insecure_skip_verify}
  */
  readonly fmcInsecureSkipVerify?: boolean | cdktf.IResolvable;
  /**
  * Password for the user to login to FMC
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/fmc/1.5.2/docs#fmc_password FmcProvider#fmc_password}
  */
  readonly fmcPassword?: string;
  /**
  * Username for the user to login to FMC
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/fmc/1.5.2/docs#fmc_username FmcProvider#fmc_username}
  */
  readonly fmcUsername?: string;
  /**
  * set to true if is a cloud-delivered Firepower Management Center (cdFMC) with Cisco Defence Orchestrator(CDO)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/fmc/1.5.2/docs#is_cdfmc FmcProvider#is_cdfmc}
  */
  readonly isCdfmc?: boolean | cdktf.IResolvable;
  /**
  * Alias name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/fmc/1.5.2/docs#alias FmcProvider#alias}
  */
  readonly alias?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/fmc/1.5.2/docs fmc}
*/
export class FmcProvider extends cdktf.TerraformProvider {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fmc";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a FmcProvider resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the FmcProvider to import
  * @param importFromId The id of the existing FmcProvider that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/fmc/1.5.2/docs#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the FmcProvider to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fmc", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/fmc/1.5.2/docs fmc} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options FmcProviderConfig
  */
  public constructor(scope: Construct, id: string, config: FmcProviderConfig) {
    super(scope, id, {
      terraformResourceType: 'fmc',
      terraformGeneratorMetadata: {
        providerName: 'fmc',
        providerVersion: '1.5.2'
      },
      terraformProviderSource: 'CiscoDevNet/fmc'
    });
    this._cdfmcDomainUuid = config.cdfmcDomainUuid;
    this._cdoToken = config.cdoToken;
    this._fmcHost = config.fmcHost;
    this._fmcInsecureSkipVerify = config.fmcInsecureSkipVerify;
    this._fmcPassword = config.fmcPassword;
    this._fmcUsername = config.fmcUsername;
    this._isCdfmc = config.isCdfmc;
    this._alias = config.alias;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cdfmc_domain_uuid - computed: false, optional: true, required: false
  private _cdfmcDomainUuid?: string; 
  public get cdfmcDomainUuid() {
    return this._cdfmcDomainUuid;
  }
  public set cdfmcDomainUuid(value: string | undefined) {
    this._cdfmcDomainUuid = value;
  }
  public resetCdfmcDomainUuid() {
    this._cdfmcDomainUuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cdfmcDomainUuidInput() {
    return this._cdfmcDomainUuid;
  }

  // cdo_token - computed: false, optional: true, required: false
  private _cdoToken?: string; 
  public get cdoToken() {
    return this._cdoToken;
  }
  public set cdoToken(value: string | undefined) {
    this._cdoToken = value;
  }
  public resetCdoToken() {
    this._cdoToken = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cdoTokenInput() {
    return this._cdoToken;
  }

  // fmc_host - computed: false, optional: false, required: true
  private _fmcHost?: string; 
  public get fmcHost() {
    return this._fmcHost;
  }
  public set fmcHost(value: string | undefined) {
    this._fmcHost = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fmcHostInput() {
    return this._fmcHost;
  }

  // fmc_insecure_skip_verify - computed: false, optional: true, required: false
  private _fmcInsecureSkipVerify?: boolean | cdktf.IResolvable; 
  public get fmcInsecureSkipVerify() {
    return this._fmcInsecureSkipVerify;
  }
  public set fmcInsecureSkipVerify(value: boolean | cdktf.IResolvable | undefined) {
    this._fmcInsecureSkipVerify = value;
  }
  public resetFmcInsecureSkipVerify() {
    this._fmcInsecureSkipVerify = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fmcInsecureSkipVerifyInput() {
    return this._fmcInsecureSkipVerify;
  }

  // fmc_password - computed: false, optional: true, required: false
  private _fmcPassword?: string; 
  public get fmcPassword() {
    return this._fmcPassword;
  }
  public set fmcPassword(value: string | undefined) {
    this._fmcPassword = value;
  }
  public resetFmcPassword() {
    this._fmcPassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fmcPasswordInput() {
    return this._fmcPassword;
  }

  // fmc_username - computed: false, optional: true, required: false
  private _fmcUsername?: string; 
  public get fmcUsername() {
    return this._fmcUsername;
  }
  public set fmcUsername(value: string | undefined) {
    this._fmcUsername = value;
  }
  public resetFmcUsername() {
    this._fmcUsername = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fmcUsernameInput() {
    return this._fmcUsername;
  }

  // is_cdfmc - computed: false, optional: true, required: false
  private _isCdfmc?: boolean | cdktf.IResolvable; 
  public get isCdfmc() {
    return this._isCdfmc;
  }
  public set isCdfmc(value: boolean | cdktf.IResolvable | undefined) {
    this._isCdfmc = value;
  }
  public resetIsCdfmc() {
    this._isCdfmc = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isCdfmcInput() {
    return this._isCdfmc;
  }

  // alias - computed: false, optional: true, required: false
  private _alias?: string; 
  public get alias() {
    return this._alias;
  }
  public set alias(value: string | undefined) {
    this._alias = value;
  }
  public resetAlias() {
    this._alias = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aliasInput() {
    return this._alias;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      cdfmc_domain_uuid: cdktf.stringToTerraform(this._cdfmcDomainUuid),
      cdo_token: cdktf.stringToTerraform(this._cdoToken),
      fmc_host: cdktf.stringToTerraform(this._fmcHost),
      fmc_insecure_skip_verify: cdktf.booleanToTerraform(this._fmcInsecureSkipVerify),
      fmc_password: cdktf.stringToTerraform(this._fmcPassword),
      fmc_username: cdktf.stringToTerraform(this._fmcUsername),
      is_cdfmc: cdktf.booleanToTerraform(this._isCdfmc),
      alias: cdktf.stringToTerraform(this._alias),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      cdfmc_domain_uuid: {
        value: cdktf.stringToHclTerraform(this._cdfmcDomainUuid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cdo_token: {
        value: cdktf.stringToHclTerraform(this._cdoToken),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      fmc_host: {
        value: cdktf.stringToHclTerraform(this._fmcHost),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      fmc_insecure_skip_verify: {
        value: cdktf.booleanToHclTerraform(this._fmcInsecureSkipVerify),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      fmc_password: {
        value: cdktf.stringToHclTerraform(this._fmcPassword),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      fmc_username: {
        value: cdktf.stringToHclTerraform(this._fmcUsername),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      is_cdfmc: {
        value: cdktf.booleanToHclTerraform(this._isCdfmc),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      alias: {
        value: cdktf.stringToHclTerraform(this._alias),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
