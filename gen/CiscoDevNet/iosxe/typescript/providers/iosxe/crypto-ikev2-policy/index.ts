// https://registry.terraform.io/providers/ciscodevnet/iosxe/0.13.0/docs/resources/crypto_ikev2_policy
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CryptoIkev2PolicyConfig extends cdktf.TerraformMetaArguments {
  /**
  * A device name from the provider configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.13.0/docs/resources/crypto_ikev2_policy#device CryptoIkev2Policy#device}
  */
  readonly device?: string;
  /**
  * Local address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.13.0/docs/resources/crypto_ikev2_policy#match_address_local_ip CryptoIkev2Policy#match_address_local_ip}
  */
  readonly matchAddressLocalIp?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.13.0/docs/resources/crypto_ikev2_policy#match_fvrf CryptoIkev2Policy#match_fvrf}
  */
  readonly matchFvrf?: string;
  /**
  * Any fvrf
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.13.0/docs/resources/crypto_ikev2_policy#match_fvrf_any CryptoIkev2Policy#match_fvrf_any}
  */
  readonly matchFvrfAny?: boolean | cdktf.IResolvable;
  /**
  * inbound only for controller
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.13.0/docs/resources/crypto_ikev2_policy#match_inbound_only CryptoIkev2Policy#match_inbound_only}
  */
  readonly matchInboundOnly?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.13.0/docs/resources/crypto_ikev2_policy#name CryptoIkev2Policy#name}
  */
  readonly name: string;
  /**
  * Specify Proposal
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.13.0/docs/resources/crypto_ikev2_policy#proposals CryptoIkev2Policy#proposals}
  */
  readonly proposals: CryptoIkev2PolicyProposals[] | cdktf.IResolvable;
}
export interface CryptoIkev2PolicyProposals {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.13.0/docs/resources/crypto_ikev2_policy#proposals CryptoIkev2Policy#proposals}
  */
  readonly proposals: string;
}

export function cryptoIkev2PolicyProposalsToTerraform(struct?: CryptoIkev2PolicyProposals | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    proposals: cdktf.stringToTerraform(struct!.proposals),
  }
}


export function cryptoIkev2PolicyProposalsToHclTerraform(struct?: CryptoIkev2PolicyProposals | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    proposals: {
      value: cdktf.stringToHclTerraform(struct!.proposals),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CryptoIkev2PolicyProposalsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): CryptoIkev2PolicyProposals | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._proposals !== undefined) {
      hasAnyValues = true;
      internalValueResult.proposals = this._proposals;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CryptoIkev2PolicyProposals | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._proposals = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._proposals = value.proposals;
    }
  }

  // proposals - computed: false, optional: false, required: true
  private _proposals?: string; 
  public get proposals() {
    return this.getStringAttribute('proposals');
  }
  public set proposals(value: string) {
    this._proposals = value;
  }
  // Temporarily expose input value. Use with caution.
  public get proposalsInput() {
    return this._proposals;
  }
}

export class CryptoIkev2PolicyProposalsList extends cdktf.ComplexList {
  public internalValue? : CryptoIkev2PolicyProposals[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): CryptoIkev2PolicyProposalsOutputReference {
    return new CryptoIkev2PolicyProposalsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.13.0/docs/resources/crypto_ikev2_policy iosxe_crypto_ikev2_policy}
*/
export class CryptoIkev2Policy extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "iosxe_crypto_ikev2_policy";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CryptoIkev2Policy resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CryptoIkev2Policy to import
  * @param importFromId The id of the existing CryptoIkev2Policy that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.13.0/docs/resources/crypto_ikev2_policy#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CryptoIkev2Policy to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "iosxe_crypto_ikev2_policy", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.13.0/docs/resources/crypto_ikev2_policy iosxe_crypto_ikev2_policy} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CryptoIkev2PolicyConfig
  */
  public constructor(scope: Construct, id: string, config: CryptoIkev2PolicyConfig) {
    super(scope, id, {
      terraformResourceType: 'iosxe_crypto_ikev2_policy',
      terraformGeneratorMetadata: {
        providerName: 'iosxe',
        providerVersion: '0.13.0',
        providerVersionConstraint: '0.13.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._device = config.device;
    this._matchAddressLocalIp = config.matchAddressLocalIp;
    this._matchFvrf = config.matchFvrf;
    this._matchFvrfAny = config.matchFvrfAny;
    this._matchInboundOnly = config.matchInboundOnly;
    this._name = config.name;
    this._proposals.internalValue = config.proposals;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // device - computed: false, optional: true, required: false
  private _device?: string; 
  public get device() {
    return this.getStringAttribute('device');
  }
  public set device(value: string) {
    this._device = value;
  }
  public resetDevice() {
    this._device = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceInput() {
    return this._device;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // match_address_local_ip - computed: false, optional: true, required: false
  private _matchAddressLocalIp?: string[]; 
  public get matchAddressLocalIp() {
    return this.getListAttribute('match_address_local_ip');
  }
  public set matchAddressLocalIp(value: string[]) {
    this._matchAddressLocalIp = value;
  }
  public resetMatchAddressLocalIp() {
    this._matchAddressLocalIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchAddressLocalIpInput() {
    return this._matchAddressLocalIp;
  }

  // match_fvrf - computed: false, optional: true, required: false
  private _matchFvrf?: string; 
  public get matchFvrf() {
    return this.getStringAttribute('match_fvrf');
  }
  public set matchFvrf(value: string) {
    this._matchFvrf = value;
  }
  public resetMatchFvrf() {
    this._matchFvrf = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchFvrfInput() {
    return this._matchFvrf;
  }

  // match_fvrf_any - computed: false, optional: true, required: false
  private _matchFvrfAny?: boolean | cdktf.IResolvable; 
  public get matchFvrfAny() {
    return this.getBooleanAttribute('match_fvrf_any');
  }
  public set matchFvrfAny(value: boolean | cdktf.IResolvable) {
    this._matchFvrfAny = value;
  }
  public resetMatchFvrfAny() {
    this._matchFvrfAny = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchFvrfAnyInput() {
    return this._matchFvrfAny;
  }

  // match_inbound_only - computed: false, optional: true, required: false
  private _matchInboundOnly?: boolean | cdktf.IResolvable; 
  public get matchInboundOnly() {
    return this.getBooleanAttribute('match_inbound_only');
  }
  public set matchInboundOnly(value: boolean | cdktf.IResolvable) {
    this._matchInboundOnly = value;
  }
  public resetMatchInboundOnly() {
    this._matchInboundOnly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchInboundOnlyInput() {
    return this._matchInboundOnly;
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

  // proposals - computed: false, optional: false, required: true
  private _proposals = new CryptoIkev2PolicyProposalsList(this, "proposals", false);
  public get proposals() {
    return this._proposals;
  }
  public putProposals(value: CryptoIkev2PolicyProposals[] | cdktf.IResolvable) {
    this._proposals.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get proposalsInput() {
    return this._proposals.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      device: cdktf.stringToTerraform(this._device),
      match_address_local_ip: cdktf.listMapper(cdktf.stringToTerraform, false)(this._matchAddressLocalIp),
      match_fvrf: cdktf.stringToTerraform(this._matchFvrf),
      match_fvrf_any: cdktf.booleanToTerraform(this._matchFvrfAny),
      match_inbound_only: cdktf.booleanToTerraform(this._matchInboundOnly),
      name: cdktf.stringToTerraform(this._name),
      proposals: cdktf.listMapper(cryptoIkev2PolicyProposalsToTerraform, false)(this._proposals.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      device: {
        value: cdktf.stringToHclTerraform(this._device),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      match_address_local_ip: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._matchAddressLocalIp),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      match_fvrf: {
        value: cdktf.stringToHclTerraform(this._matchFvrf),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      match_fvrf_any: {
        value: cdktf.booleanToHclTerraform(this._matchFvrfAny),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      match_inbound_only: {
        value: cdktf.booleanToHclTerraform(this._matchInboundOnly),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      proposals: {
        value: cdktf.listMapperHcl(cryptoIkev2PolicyProposalsToHclTerraform, false)(this._proposals.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CryptoIkev2PolicyProposalsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
