// https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/aam_authentication_saml_identity_provider_stats
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataThunderAamAuthenticationSamlIdentityProviderStatsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/aam_authentication_saml_identity_provider_stats#id DataThunderAamAuthenticationSamlIdentityProviderStats#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * SAML authentication identity provider name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/aam_authentication_saml_identity_provider_stats#name DataThunderAamAuthenticationSamlIdentityProviderStats#name}
  */
  readonly name: string;
  /**
  * stats block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/aam_authentication_saml_identity_provider_stats#stats DataThunderAamAuthenticationSamlIdentityProviderStats#stats}
  */
  readonly stats?: DataThunderAamAuthenticationSamlIdentityProviderStatsStats;
}
export interface DataThunderAamAuthenticationSamlIdentityProviderStatsStats {
  /**
  * ACS Fail Count
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/aam_authentication_saml_identity_provider_stats#acs_fail DataThunderAamAuthenticationSamlIdentityProviderStats#acs_fail}
  */
  readonly acsFail?: number;
  /**
  * ACS Pass Count
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/aam_authentication_saml_identity_provider_stats#acs_pass DataThunderAamAuthenticationSamlIdentityProviderStats#acs_pass}
  */
  readonly acsPass?: number;
  /**
  * ACS Request Total Count
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/aam_authentication_saml_identity_provider_stats#acs_req DataThunderAamAuthenticationSamlIdentityProviderStats#acs_req}
  */
  readonly acsReq?: number;
  /**
  * ACS State
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/aam_authentication_saml_identity_provider_stats#acs_state DataThunderAamAuthenticationSamlIdentityProviderStats#acs_state}
  */
  readonly acsState?: number;
  /**
  * Metadata Update Fail Count
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/aam_authentication_saml_identity_provider_stats#md_fail DataThunderAamAuthenticationSamlIdentityProviderStats#md_fail}
  */
  readonly mdFail?: number;
  /**
  * Metadata State
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/aam_authentication_saml_identity_provider_stats#md_state DataThunderAamAuthenticationSamlIdentityProviderStats#md_state}
  */
  readonly mdState?: number;
  /**
  * Metadata Update Success Count
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/aam_authentication_saml_identity_provider_stats#md_update DataThunderAamAuthenticationSamlIdentityProviderStats#md_update}
  */
  readonly mdUpdate?: number;
  /**
  * Valid IdP status or not
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/aam_authentication_saml_identity_provider_stats#valid_status DataThunderAamAuthenticationSamlIdentityProviderStats#valid_status}
  */
  readonly validStatus?: number;
}

export function dataThunderAamAuthenticationSamlIdentityProviderStatsStatsToTerraform(struct?: DataThunderAamAuthenticationSamlIdentityProviderStatsStatsOutputReference | DataThunderAamAuthenticationSamlIdentityProviderStatsStats): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    acs_fail: cdktf.numberToTerraform(struct!.acsFail),
    acs_pass: cdktf.numberToTerraform(struct!.acsPass),
    acs_req: cdktf.numberToTerraform(struct!.acsReq),
    acs_state: cdktf.numberToTerraform(struct!.acsState),
    md_fail: cdktf.numberToTerraform(struct!.mdFail),
    md_state: cdktf.numberToTerraform(struct!.mdState),
    md_update: cdktf.numberToTerraform(struct!.mdUpdate),
    valid_status: cdktf.numberToTerraform(struct!.validStatus),
  }
}


export function dataThunderAamAuthenticationSamlIdentityProviderStatsStatsToHclTerraform(struct?: DataThunderAamAuthenticationSamlIdentityProviderStatsStatsOutputReference | DataThunderAamAuthenticationSamlIdentityProviderStatsStats): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    acs_fail: {
      value: cdktf.numberToHclTerraform(struct!.acsFail),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    acs_pass: {
      value: cdktf.numberToHclTerraform(struct!.acsPass),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    acs_req: {
      value: cdktf.numberToHclTerraform(struct!.acsReq),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    acs_state: {
      value: cdktf.numberToHclTerraform(struct!.acsState),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    md_fail: {
      value: cdktf.numberToHclTerraform(struct!.mdFail),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    md_state: {
      value: cdktf.numberToHclTerraform(struct!.mdState),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    md_update: {
      value: cdktf.numberToHclTerraform(struct!.mdUpdate),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    valid_status: {
      value: cdktf.numberToHclTerraform(struct!.validStatus),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderAamAuthenticationSamlIdentityProviderStatsStatsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderAamAuthenticationSamlIdentityProviderStatsStats | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._acsFail !== undefined) {
      hasAnyValues = true;
      internalValueResult.acsFail = this._acsFail;
    }
    if (this._acsPass !== undefined) {
      hasAnyValues = true;
      internalValueResult.acsPass = this._acsPass;
    }
    if (this._acsReq !== undefined) {
      hasAnyValues = true;
      internalValueResult.acsReq = this._acsReq;
    }
    if (this._acsState !== undefined) {
      hasAnyValues = true;
      internalValueResult.acsState = this._acsState;
    }
    if (this._mdFail !== undefined) {
      hasAnyValues = true;
      internalValueResult.mdFail = this._mdFail;
    }
    if (this._mdState !== undefined) {
      hasAnyValues = true;
      internalValueResult.mdState = this._mdState;
    }
    if (this._mdUpdate !== undefined) {
      hasAnyValues = true;
      internalValueResult.mdUpdate = this._mdUpdate;
    }
    if (this._validStatus !== undefined) {
      hasAnyValues = true;
      internalValueResult.validStatus = this._validStatus;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderAamAuthenticationSamlIdentityProviderStatsStats | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._acsFail = undefined;
      this._acsPass = undefined;
      this._acsReq = undefined;
      this._acsState = undefined;
      this._mdFail = undefined;
      this._mdState = undefined;
      this._mdUpdate = undefined;
      this._validStatus = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._acsFail = value.acsFail;
      this._acsPass = value.acsPass;
      this._acsReq = value.acsReq;
      this._acsState = value.acsState;
      this._mdFail = value.mdFail;
      this._mdState = value.mdState;
      this._mdUpdate = value.mdUpdate;
      this._validStatus = value.validStatus;
    }
  }

  // acs_fail - computed: false, optional: true, required: false
  private _acsFail?: number; 
  public get acsFail() {
    return this.getNumberAttribute('acs_fail');
  }
  public set acsFail(value: number) {
    this._acsFail = value;
  }
  public resetAcsFail() {
    this._acsFail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get acsFailInput() {
    return this._acsFail;
  }

  // acs_pass - computed: false, optional: true, required: false
  private _acsPass?: number; 
  public get acsPass() {
    return this.getNumberAttribute('acs_pass');
  }
  public set acsPass(value: number) {
    this._acsPass = value;
  }
  public resetAcsPass() {
    this._acsPass = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get acsPassInput() {
    return this._acsPass;
  }

  // acs_req - computed: false, optional: true, required: false
  private _acsReq?: number; 
  public get acsReq() {
    return this.getNumberAttribute('acs_req');
  }
  public set acsReq(value: number) {
    this._acsReq = value;
  }
  public resetAcsReq() {
    this._acsReq = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get acsReqInput() {
    return this._acsReq;
  }

  // acs_state - computed: false, optional: true, required: false
  private _acsState?: number; 
  public get acsState() {
    return this.getNumberAttribute('acs_state');
  }
  public set acsState(value: number) {
    this._acsState = value;
  }
  public resetAcsState() {
    this._acsState = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get acsStateInput() {
    return this._acsState;
  }

  // md_fail - computed: false, optional: true, required: false
  private _mdFail?: number; 
  public get mdFail() {
    return this.getNumberAttribute('md_fail');
  }
  public set mdFail(value: number) {
    this._mdFail = value;
  }
  public resetMdFail() {
    this._mdFail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mdFailInput() {
    return this._mdFail;
  }

  // md_state - computed: false, optional: true, required: false
  private _mdState?: number; 
  public get mdState() {
    return this.getNumberAttribute('md_state');
  }
  public set mdState(value: number) {
    this._mdState = value;
  }
  public resetMdState() {
    this._mdState = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mdStateInput() {
    return this._mdState;
  }

  // md_update - computed: false, optional: true, required: false
  private _mdUpdate?: number; 
  public get mdUpdate() {
    return this.getNumberAttribute('md_update');
  }
  public set mdUpdate(value: number) {
    this._mdUpdate = value;
  }
  public resetMdUpdate() {
    this._mdUpdate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mdUpdateInput() {
    return this._mdUpdate;
  }

  // valid_status - computed: false, optional: true, required: false
  private _validStatus?: number; 
  public get validStatus() {
    return this.getNumberAttribute('valid_status');
  }
  public set validStatus(value: number) {
    this._validStatus = value;
  }
  public resetValidStatus() {
    this._validStatus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get validStatusInput() {
    return this._validStatus;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/aam_authentication_saml_identity_provider_stats thunder_aam_authentication_saml_identity_provider_stats}
*/
export class DataThunderAamAuthenticationSamlIdentityProviderStats extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_aam_authentication_saml_identity_provider_stats";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataThunderAamAuthenticationSamlIdentityProviderStats resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataThunderAamAuthenticationSamlIdentityProviderStats to import
  * @param importFromId The id of the existing DataThunderAamAuthenticationSamlIdentityProviderStats that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/aam_authentication_saml_identity_provider_stats#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataThunderAamAuthenticationSamlIdentityProviderStats to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_aam_authentication_saml_identity_provider_stats", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/aam_authentication_saml_identity_provider_stats thunder_aam_authentication_saml_identity_provider_stats} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataThunderAamAuthenticationSamlIdentityProviderStatsConfig
  */
  public constructor(scope: Construct, id: string, config: DataThunderAamAuthenticationSamlIdentityProviderStatsConfig) {
    super(scope, id, {
      terraformResourceType: 'thunder_aam_authentication_saml_identity_provider_stats',
      terraformGeneratorMetadata: {
        providerName: 'thunder',
        providerVersion: '1.4.2'
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
    this._name = config.name;
    this._stats.internalValue = config.stats;
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

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // stats - computed: false, optional: true, required: false
  private _stats = new DataThunderAamAuthenticationSamlIdentityProviderStatsStatsOutputReference(this, "stats");
  public get stats() {
    return this._stats;
  }
  public putStats(value: DataThunderAamAuthenticationSamlIdentityProviderStatsStats) {
    this._stats.internalValue = value;
  }
  public resetStats() {
    this._stats.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statsInput() {
    return this._stats.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      stats: dataThunderAamAuthenticationSamlIdentityProviderStatsStatsToTerraform(this._stats.internalValue),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      stats: {
        value: dataThunderAamAuthenticationSamlIdentityProviderStatsStatsToHclTerraform(this._stats.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataThunderAamAuthenticationSamlIdentityProviderStatsStatsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
