// https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/sslprofile
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SslprofileConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/sslprofile#alpnprotocol Sslprofile#alpnprotocol}
  */
  readonly alpnprotocol?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/sslprofile#ciphername Sslprofile#ciphername}
  */
  readonly ciphername?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/sslprofile#cipherpriority Sslprofile#cipherpriority}
  */
  readonly cipherpriority?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/sslprofile#cipherredirect Sslprofile#cipherredirect}
  */
  readonly cipherredirect?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/sslprofile#cipherurl Sslprofile#cipherurl}
  */
  readonly cipherurl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/sslprofile#cleartextport Sslprofile#cleartextport}
  */
  readonly cleartextport?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/sslprofile#clientauth Sslprofile#clientauth}
  */
  readonly clientauth?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/sslprofile#clientauthuseboundcachain Sslprofile#clientauthuseboundcachain}
  */
  readonly clientauthuseboundcachain?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/sslprofile#clientcert Sslprofile#clientcert}
  */
  readonly clientcert?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/sslprofile#commonname Sslprofile#commonname}
  */
  readonly commonname?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/sslprofile#denysslreneg Sslprofile#denysslreneg}
  */
  readonly denysslreneg?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/sslprofile#dh Sslprofile#dh}
  */
  readonly dh?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/sslprofile#dhcount Sslprofile#dhcount}
  */
  readonly dhcount?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/sslprofile#dhekeyexchangewithpsk Sslprofile#dhekeyexchangewithpsk}
  */
  readonly dhekeyexchangewithpsk?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/sslprofile#dhfile Sslprofile#dhfile}
  */
  readonly dhfile?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/sslprofile#dhkeyexpsizelimit Sslprofile#dhkeyexpsizelimit}
  */
  readonly dhkeyexpsizelimit?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/sslprofile#dropreqwithnohostheader Sslprofile#dropreqwithnohostheader}
  */
  readonly dropreqwithnohostheader?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/sslprofile#ecccurvebindings Sslprofile#ecccurvebindings}
  */
  readonly ecccurvebindings?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/sslprofile#encrypttriggerpktcount Sslprofile#encrypttriggerpktcount}
  */
  readonly encrypttriggerpktcount?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/sslprofile#ersa Sslprofile#ersa}
  */
  readonly ersa?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/sslprofile#ersacount Sslprofile#ersacount}
  */
  readonly ersacount?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/sslprofile#hsts Sslprofile#hsts}
  */
  readonly hsts?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/sslprofile#id Sslprofile#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/sslprofile#includesubdomains Sslprofile#includesubdomains}
  */
  readonly includesubdomains?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/sslprofile#insertionencoding Sslprofile#insertionencoding}
  */
  readonly insertionencoding?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/sslprofile#maxage Sslprofile#maxage}
  */
  readonly maxage?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/sslprofile#name Sslprofile#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/sslprofile#nodefaultbindings Sslprofile#nodefaultbindings}
  */
  readonly nodefaultbindings?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/sslprofile#nodefaultcipherbindings Sslprofile#nodefaultcipherbindings}
  */
  readonly nodefaultcipherbindings?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/sslprofile#nodefaultecccurvebindings Sslprofile#nodefaultecccurvebindings}
  */
  readonly nodefaultecccurvebindings?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/sslprofile#ocspstapling Sslprofile#ocspstapling}
  */
  readonly ocspstapling?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/sslprofile#preload Sslprofile#preload}
  */
  readonly preload?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/sslprofile#prevsessionkeylifetime Sslprofile#prevsessionkeylifetime}
  */
  readonly prevsessionkeylifetime?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/sslprofile#pushenctrigger Sslprofile#pushenctrigger}
  */
  readonly pushenctrigger?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/sslprofile#pushenctriggertimeout Sslprofile#pushenctriggertimeout}
  */
  readonly pushenctriggertimeout?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/sslprofile#pushflag Sslprofile#pushflag}
  */
  readonly pushflag?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/sslprofile#quantumsize Sslprofile#quantumsize}
  */
  readonly quantumsize?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/sslprofile#redirectportrewrite Sslprofile#redirectportrewrite}
  */
  readonly redirectportrewrite?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/sslprofile#sendclosenotify Sslprofile#sendclosenotify}
  */
  readonly sendclosenotify?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/sslprofile#serverauth Sslprofile#serverauth}
  */
  readonly serverauth?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/sslprofile#sessionkeylifetime Sslprofile#sessionkeylifetime}
  */
  readonly sessionkeylifetime?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/sslprofile#sessionticket Sslprofile#sessionticket}
  */
  readonly sessionticket?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/sslprofile#sessionticketkeydata Sslprofile#sessionticketkeydata}
  */
  readonly sessionticketkeydata?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/sslprofile#sessionticketkeyrefresh Sslprofile#sessionticketkeyrefresh}
  */
  readonly sessionticketkeyrefresh?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/sslprofile#sessionticketlifetime Sslprofile#sessionticketlifetime}
  */
  readonly sessionticketlifetime?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/sslprofile#sessreuse Sslprofile#sessreuse}
  */
  readonly sessreuse?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/sslprofile#sesstimeout Sslprofile#sesstimeout}
  */
  readonly sesstimeout?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/sslprofile#skipclientcertpolicycheck Sslprofile#skipclientcertpolicycheck}
  */
  readonly skipclientcertpolicycheck?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/sslprofile#snienable Sslprofile#snienable}
  */
  readonly snienable?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/sslprofile#snihttphostmatch Sslprofile#snihttphostmatch}
  */
  readonly snihttphostmatch?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/sslprofile#ssl3 Sslprofile#ssl3}
  */
  readonly ssl3?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/sslprofile#sslimaxsessperserver Sslprofile#sslimaxsessperserver}
  */
  readonly sslimaxsessperserver?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/sslprofile#sslinterception Sslprofile#sslinterception}
  */
  readonly sslinterception?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/sslprofile#ssliocspcheck Sslprofile#ssliocspcheck}
  */
  readonly ssliocspcheck?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/sslprofile#sslireneg Sslprofile#sslireneg}
  */
  readonly sslireneg?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/sslprofile#ssllogprofile Sslprofile#ssllogprofile}
  */
  readonly ssllogprofile?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/sslprofile#sslprofiletype Sslprofile#sslprofiletype}
  */
  readonly sslprofiletype?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/sslprofile#sslredirect Sslprofile#sslredirect}
  */
  readonly sslredirect?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/sslprofile#ssltriggertimeout Sslprofile#ssltriggertimeout}
  */
  readonly ssltriggertimeout?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/sslprofile#strictcachecks Sslprofile#strictcachecks}
  */
  readonly strictcachecks?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/sslprofile#strictsigdigestcheck Sslprofile#strictsigdigestcheck}
  */
  readonly strictsigdigestcheck?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/sslprofile#tls1 Sslprofile#tls1}
  */
  readonly tls1?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/sslprofile#tls11 Sslprofile#tls11}
  */
  readonly tls11?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/sslprofile#tls12 Sslprofile#tls12}
  */
  readonly tls12?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/sslprofile#tls13 Sslprofile#tls13}
  */
  readonly tls13?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/sslprofile#tls13sessionticketsperauthcontext Sslprofile#tls13sessionticketsperauthcontext}
  */
  readonly tls13Sessionticketsperauthcontext?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/sslprofile#zerorttearlydata Sslprofile#zerorttearlydata}
  */
  readonly zerorttearlydata?: string;
  /**
  * cipherbindings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/sslprofile#cipherbindings Sslprofile#cipherbindings}
  */
  readonly cipherbindings?: SslprofileCipherbindings[] | cdktf.IResolvable;
}
export interface SslprofileCipherbindings {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/sslprofile#ciphername Sslprofile#ciphername}
  */
  readonly ciphername?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/sslprofile#cipherpriority Sslprofile#cipherpriority}
  */
  readonly cipherpriority?: number;
}

export function sslprofileCipherbindingsToTerraform(struct?: SslprofileCipherbindings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ciphername: cdktf.stringToTerraform(struct!.ciphername),
    cipherpriority: cdktf.numberToTerraform(struct!.cipherpriority),
  }
}


export function sslprofileCipherbindingsToHclTerraform(struct?: SslprofileCipherbindings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ciphername: {
      value: cdktf.stringToHclTerraform(struct!.ciphername),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cipherpriority: {
      value: cdktf.numberToHclTerraform(struct!.cipherpriority),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SslprofileCipherbindingsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SslprofileCipherbindings | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ciphername !== undefined) {
      hasAnyValues = true;
      internalValueResult.ciphername = this._ciphername;
    }
    if (this._cipherpriority !== undefined) {
      hasAnyValues = true;
      internalValueResult.cipherpriority = this._cipherpriority;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SslprofileCipherbindings | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ciphername = undefined;
      this._cipherpriority = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ciphername = value.ciphername;
      this._cipherpriority = value.cipherpriority;
    }
  }

  // ciphername - computed: false, optional: true, required: false
  private _ciphername?: string; 
  public get ciphername() {
    return this.getStringAttribute('ciphername');
  }
  public set ciphername(value: string) {
    this._ciphername = value;
  }
  public resetCiphername() {
    this._ciphername = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ciphernameInput() {
    return this._ciphername;
  }

  // cipherpriority - computed: false, optional: true, required: false
  private _cipherpriority?: number; 
  public get cipherpriority() {
    return this.getNumberAttribute('cipherpriority');
  }
  public set cipherpriority(value: number) {
    this._cipherpriority = value;
  }
  public resetCipherpriority() {
    this._cipherpriority = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cipherpriorityInput() {
    return this._cipherpriority;
  }
}

export class SslprofileCipherbindingsList extends cdktf.ComplexList {
  public internalValue? : SslprofileCipherbindings[] | cdktf.IResolvable

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
  public get(index: number): SslprofileCipherbindingsOutputReference {
    return new SslprofileCipherbindingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/sslprofile citrixadc_sslprofile}
*/
export class Sslprofile extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "citrixadc_sslprofile";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Sslprofile resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Sslprofile to import
  * @param importFromId The id of the existing Sslprofile that should be imported. Refer to the {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/sslprofile#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Sslprofile to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "citrixadc_sslprofile", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/sslprofile citrixadc_sslprofile} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SslprofileConfig
  */
  public constructor(scope: Construct, id: string, config: SslprofileConfig) {
    super(scope, id, {
      terraformResourceType: 'citrixadc_sslprofile',
      terraformGeneratorMetadata: {
        providerName: 'citrixadc',
        providerVersion: '1.45.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._alpnprotocol = config.alpnprotocol;
    this._ciphername = config.ciphername;
    this._cipherpriority = config.cipherpriority;
    this._cipherredirect = config.cipherredirect;
    this._cipherurl = config.cipherurl;
    this._cleartextport = config.cleartextport;
    this._clientauth = config.clientauth;
    this._clientauthuseboundcachain = config.clientauthuseboundcachain;
    this._clientcert = config.clientcert;
    this._commonname = config.commonname;
    this._denysslreneg = config.denysslreneg;
    this._dh = config.dh;
    this._dhcount = config.dhcount;
    this._dhekeyexchangewithpsk = config.dhekeyexchangewithpsk;
    this._dhfile = config.dhfile;
    this._dhkeyexpsizelimit = config.dhkeyexpsizelimit;
    this._dropreqwithnohostheader = config.dropreqwithnohostheader;
    this._ecccurvebindings = config.ecccurvebindings;
    this._encrypttriggerpktcount = config.encrypttriggerpktcount;
    this._ersa = config.ersa;
    this._ersacount = config.ersacount;
    this._hsts = config.hsts;
    this._id = config.id;
    this._includesubdomains = config.includesubdomains;
    this._insertionencoding = config.insertionencoding;
    this._maxage = config.maxage;
    this._name = config.name;
    this._nodefaultbindings = config.nodefaultbindings;
    this._nodefaultcipherbindings = config.nodefaultcipherbindings;
    this._nodefaultecccurvebindings = config.nodefaultecccurvebindings;
    this._ocspstapling = config.ocspstapling;
    this._preload = config.preload;
    this._prevsessionkeylifetime = config.prevsessionkeylifetime;
    this._pushenctrigger = config.pushenctrigger;
    this._pushenctriggertimeout = config.pushenctriggertimeout;
    this._pushflag = config.pushflag;
    this._quantumsize = config.quantumsize;
    this._redirectportrewrite = config.redirectportrewrite;
    this._sendclosenotify = config.sendclosenotify;
    this._serverauth = config.serverauth;
    this._sessionkeylifetime = config.sessionkeylifetime;
    this._sessionticket = config.sessionticket;
    this._sessionticketkeydata = config.sessionticketkeydata;
    this._sessionticketkeyrefresh = config.sessionticketkeyrefresh;
    this._sessionticketlifetime = config.sessionticketlifetime;
    this._sessreuse = config.sessreuse;
    this._sesstimeout = config.sesstimeout;
    this._skipclientcertpolicycheck = config.skipclientcertpolicycheck;
    this._snienable = config.snienable;
    this._snihttphostmatch = config.snihttphostmatch;
    this._ssl3 = config.ssl3;
    this._sslimaxsessperserver = config.sslimaxsessperserver;
    this._sslinterception = config.sslinterception;
    this._ssliocspcheck = config.ssliocspcheck;
    this._sslireneg = config.sslireneg;
    this._ssllogprofile = config.ssllogprofile;
    this._sslprofiletype = config.sslprofiletype;
    this._sslredirect = config.sslredirect;
    this._ssltriggertimeout = config.ssltriggertimeout;
    this._strictcachecks = config.strictcachecks;
    this._strictsigdigestcheck = config.strictsigdigestcheck;
    this._tls1 = config.tls1;
    this._tls11 = config.tls11;
    this._tls12 = config.tls12;
    this._tls13 = config.tls13;
    this._tls13Sessionticketsperauthcontext = config.tls13Sessionticketsperauthcontext;
    this._zerorttearlydata = config.zerorttearlydata;
    this._cipherbindings.internalValue = config.cipherbindings;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // alpnprotocol - computed: true, optional: true, required: false
  private _alpnprotocol?: string; 
  public get alpnprotocol() {
    return this.getStringAttribute('alpnprotocol');
  }
  public set alpnprotocol(value: string) {
    this._alpnprotocol = value;
  }
  public resetAlpnprotocol() {
    this._alpnprotocol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get alpnprotocolInput() {
    return this._alpnprotocol;
  }

  // ciphername - computed: true, optional: true, required: false
  private _ciphername?: string; 
  public get ciphername() {
    return this.getStringAttribute('ciphername');
  }
  public set ciphername(value: string) {
    this._ciphername = value;
  }
  public resetCiphername() {
    this._ciphername = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ciphernameInput() {
    return this._ciphername;
  }

  // cipherpriority - computed: true, optional: true, required: false
  private _cipherpriority?: number; 
  public get cipherpriority() {
    return this.getNumberAttribute('cipherpriority');
  }
  public set cipherpriority(value: number) {
    this._cipherpriority = value;
  }
  public resetCipherpriority() {
    this._cipherpriority = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cipherpriorityInput() {
    return this._cipherpriority;
  }

  // cipherredirect - computed: true, optional: true, required: false
  private _cipherredirect?: string; 
  public get cipherredirect() {
    return this.getStringAttribute('cipherredirect');
  }
  public set cipherredirect(value: string) {
    this._cipherredirect = value;
  }
  public resetCipherredirect() {
    this._cipherredirect = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cipherredirectInput() {
    return this._cipherredirect;
  }

  // cipherurl - computed: true, optional: true, required: false
  private _cipherurl?: string; 
  public get cipherurl() {
    return this.getStringAttribute('cipherurl');
  }
  public set cipherurl(value: string) {
    this._cipherurl = value;
  }
  public resetCipherurl() {
    this._cipherurl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cipherurlInput() {
    return this._cipherurl;
  }

  // cleartextport - computed: true, optional: true, required: false
  private _cleartextport?: number; 
  public get cleartextport() {
    return this.getNumberAttribute('cleartextport');
  }
  public set cleartextport(value: number) {
    this._cleartextport = value;
  }
  public resetCleartextport() {
    this._cleartextport = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cleartextportInput() {
    return this._cleartextport;
  }

  // clientauth - computed: true, optional: true, required: false
  private _clientauth?: string; 
  public get clientauth() {
    return this.getStringAttribute('clientauth');
  }
  public set clientauth(value: string) {
    this._clientauth = value;
  }
  public resetClientauth() {
    this._clientauth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientauthInput() {
    return this._clientauth;
  }

  // clientauthuseboundcachain - computed: true, optional: true, required: false
  private _clientauthuseboundcachain?: string; 
  public get clientauthuseboundcachain() {
    return this.getStringAttribute('clientauthuseboundcachain');
  }
  public set clientauthuseboundcachain(value: string) {
    this._clientauthuseboundcachain = value;
  }
  public resetClientauthuseboundcachain() {
    this._clientauthuseboundcachain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientauthuseboundcachainInput() {
    return this._clientauthuseboundcachain;
  }

  // clientcert - computed: true, optional: true, required: false
  private _clientcert?: string; 
  public get clientcert() {
    return this.getStringAttribute('clientcert');
  }
  public set clientcert(value: string) {
    this._clientcert = value;
  }
  public resetClientcert() {
    this._clientcert = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientcertInput() {
    return this._clientcert;
  }

  // commonname - computed: true, optional: true, required: false
  private _commonname?: string; 
  public get commonname() {
    return this.getStringAttribute('commonname');
  }
  public set commonname(value: string) {
    this._commonname = value;
  }
  public resetCommonname() {
    this._commonname = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commonnameInput() {
    return this._commonname;
  }

  // denysslreneg - computed: true, optional: true, required: false
  private _denysslreneg?: string; 
  public get denysslreneg() {
    return this.getStringAttribute('denysslreneg');
  }
  public set denysslreneg(value: string) {
    this._denysslreneg = value;
  }
  public resetDenysslreneg() {
    this._denysslreneg = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get denysslrenegInput() {
    return this._denysslreneg;
  }

  // dh - computed: true, optional: true, required: false
  private _dh?: string; 
  public get dh() {
    return this.getStringAttribute('dh');
  }
  public set dh(value: string) {
    this._dh = value;
  }
  public resetDh() {
    this._dh = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dhInput() {
    return this._dh;
  }

  // dhcount - computed: true, optional: true, required: false
  private _dhcount?: number; 
  public get dhcount() {
    return this.getNumberAttribute('dhcount');
  }
  public set dhcount(value: number) {
    this._dhcount = value;
  }
  public resetDhcount() {
    this._dhcount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dhcountInput() {
    return this._dhcount;
  }

  // dhekeyexchangewithpsk - computed: true, optional: true, required: false
  private _dhekeyexchangewithpsk?: string; 
  public get dhekeyexchangewithpsk() {
    return this.getStringAttribute('dhekeyexchangewithpsk');
  }
  public set dhekeyexchangewithpsk(value: string) {
    this._dhekeyexchangewithpsk = value;
  }
  public resetDhekeyexchangewithpsk() {
    this._dhekeyexchangewithpsk = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dhekeyexchangewithpskInput() {
    return this._dhekeyexchangewithpsk;
  }

  // dhfile - computed: true, optional: true, required: false
  private _dhfile?: string; 
  public get dhfile() {
    return this.getStringAttribute('dhfile');
  }
  public set dhfile(value: string) {
    this._dhfile = value;
  }
  public resetDhfile() {
    this._dhfile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dhfileInput() {
    return this._dhfile;
  }

  // dhkeyexpsizelimit - computed: true, optional: true, required: false
  private _dhkeyexpsizelimit?: string; 
  public get dhkeyexpsizelimit() {
    return this.getStringAttribute('dhkeyexpsizelimit');
  }
  public set dhkeyexpsizelimit(value: string) {
    this._dhkeyexpsizelimit = value;
  }
  public resetDhkeyexpsizelimit() {
    this._dhkeyexpsizelimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dhkeyexpsizelimitInput() {
    return this._dhkeyexpsizelimit;
  }

  // dropreqwithnohostheader - computed: true, optional: true, required: false
  private _dropreqwithnohostheader?: string; 
  public get dropreqwithnohostheader() {
    return this.getStringAttribute('dropreqwithnohostheader');
  }
  public set dropreqwithnohostheader(value: string) {
    this._dropreqwithnohostheader = value;
  }
  public resetDropreqwithnohostheader() {
    this._dropreqwithnohostheader = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dropreqwithnohostheaderInput() {
    return this._dropreqwithnohostheader;
  }

  // ecccurvebindings - computed: false, optional: true, required: false
  private _ecccurvebindings?: string[]; 
  public get ecccurvebindings() {
    return cdktf.Fn.tolist(this.getListAttribute('ecccurvebindings'));
  }
  public set ecccurvebindings(value: string[]) {
    this._ecccurvebindings = value;
  }
  public resetEcccurvebindings() {
    this._ecccurvebindings = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ecccurvebindingsInput() {
    return this._ecccurvebindings;
  }

  // encrypttriggerpktcount - computed: true, optional: true, required: false
  private _encrypttriggerpktcount?: number; 
  public get encrypttriggerpktcount() {
    return this.getNumberAttribute('encrypttriggerpktcount');
  }
  public set encrypttriggerpktcount(value: number) {
    this._encrypttriggerpktcount = value;
  }
  public resetEncrypttriggerpktcount() {
    this._encrypttriggerpktcount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encrypttriggerpktcountInput() {
    return this._encrypttriggerpktcount;
  }

  // ersa - computed: true, optional: true, required: false
  private _ersa?: string; 
  public get ersa() {
    return this.getStringAttribute('ersa');
  }
  public set ersa(value: string) {
    this._ersa = value;
  }
  public resetErsa() {
    this._ersa = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ersaInput() {
    return this._ersa;
  }

  // ersacount - computed: true, optional: true, required: false
  private _ersacount?: number; 
  public get ersacount() {
    return this.getNumberAttribute('ersacount');
  }
  public set ersacount(value: number) {
    this._ersacount = value;
  }
  public resetErsacount() {
    this._ersacount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ersacountInput() {
    return this._ersacount;
  }

  // hsts - computed: true, optional: true, required: false
  private _hsts?: string; 
  public get hsts() {
    return this.getStringAttribute('hsts');
  }
  public set hsts(value: string) {
    this._hsts = value;
  }
  public resetHsts() {
    this._hsts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hstsInput() {
    return this._hsts;
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

  // includesubdomains - computed: true, optional: true, required: false
  private _includesubdomains?: string; 
  public get includesubdomains() {
    return this.getStringAttribute('includesubdomains');
  }
  public set includesubdomains(value: string) {
    this._includesubdomains = value;
  }
  public resetIncludesubdomains() {
    this._includesubdomains = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includesubdomainsInput() {
    return this._includesubdomains;
  }

  // insertionencoding - computed: true, optional: true, required: false
  private _insertionencoding?: string; 
  public get insertionencoding() {
    return this.getStringAttribute('insertionencoding');
  }
  public set insertionencoding(value: string) {
    this._insertionencoding = value;
  }
  public resetInsertionencoding() {
    this._insertionencoding = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get insertionencodingInput() {
    return this._insertionencoding;
  }

  // maxage - computed: true, optional: true, required: false
  private _maxage?: number; 
  public get maxage() {
    return this.getNumberAttribute('maxage');
  }
  public set maxage(value: number) {
    this._maxage = value;
  }
  public resetMaxage() {
    this._maxage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxageInput() {
    return this._maxage;
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

  // nodefaultbindings - computed: true, optional: true, required: false
  private _nodefaultbindings?: string; 
  public get nodefaultbindings() {
    return this.getStringAttribute('nodefaultbindings');
  }
  public set nodefaultbindings(value: string) {
    this._nodefaultbindings = value;
  }
  public resetNodefaultbindings() {
    this._nodefaultbindings = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodefaultbindingsInput() {
    return this._nodefaultbindings;
  }

  // nodefaultcipherbindings - computed: true, optional: true, required: false
  private _nodefaultcipherbindings?: boolean | cdktf.IResolvable; 
  public get nodefaultcipherbindings() {
    return this.getBooleanAttribute('nodefaultcipherbindings');
  }
  public set nodefaultcipherbindings(value: boolean | cdktf.IResolvable) {
    this._nodefaultcipherbindings = value;
  }
  public resetNodefaultcipherbindings() {
    this._nodefaultcipherbindings = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodefaultcipherbindingsInput() {
    return this._nodefaultcipherbindings;
  }

  // nodefaultecccurvebindings - computed: true, optional: true, required: false
  private _nodefaultecccurvebindings?: boolean | cdktf.IResolvable; 
  public get nodefaultecccurvebindings() {
    return this.getBooleanAttribute('nodefaultecccurvebindings');
  }
  public set nodefaultecccurvebindings(value: boolean | cdktf.IResolvable) {
    this._nodefaultecccurvebindings = value;
  }
  public resetNodefaultecccurvebindings() {
    this._nodefaultecccurvebindings = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodefaultecccurvebindingsInput() {
    return this._nodefaultecccurvebindings;
  }

  // ocspstapling - computed: true, optional: true, required: false
  private _ocspstapling?: string; 
  public get ocspstapling() {
    return this.getStringAttribute('ocspstapling');
  }
  public set ocspstapling(value: string) {
    this._ocspstapling = value;
  }
  public resetOcspstapling() {
    this._ocspstapling = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ocspstaplingInput() {
    return this._ocspstapling;
  }

  // preload - computed: true, optional: true, required: false
  private _preload?: string; 
  public get preload() {
    return this.getStringAttribute('preload');
  }
  public set preload(value: string) {
    this._preload = value;
  }
  public resetPreload() {
    this._preload = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preloadInput() {
    return this._preload;
  }

  // prevsessionkeylifetime - computed: true, optional: true, required: false
  private _prevsessionkeylifetime?: number; 
  public get prevsessionkeylifetime() {
    return this.getNumberAttribute('prevsessionkeylifetime');
  }
  public set prevsessionkeylifetime(value: number) {
    this._prevsessionkeylifetime = value;
  }
  public resetPrevsessionkeylifetime() {
    this._prevsessionkeylifetime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prevsessionkeylifetimeInput() {
    return this._prevsessionkeylifetime;
  }

  // pushenctrigger - computed: true, optional: true, required: false
  private _pushenctrigger?: string; 
  public get pushenctrigger() {
    return this.getStringAttribute('pushenctrigger');
  }
  public set pushenctrigger(value: string) {
    this._pushenctrigger = value;
  }
  public resetPushenctrigger() {
    this._pushenctrigger = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pushenctriggerInput() {
    return this._pushenctrigger;
  }

  // pushenctriggertimeout - computed: true, optional: true, required: false
  private _pushenctriggertimeout?: number; 
  public get pushenctriggertimeout() {
    return this.getNumberAttribute('pushenctriggertimeout');
  }
  public set pushenctriggertimeout(value: number) {
    this._pushenctriggertimeout = value;
  }
  public resetPushenctriggertimeout() {
    this._pushenctriggertimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pushenctriggertimeoutInput() {
    return this._pushenctriggertimeout;
  }

  // pushflag - computed: true, optional: true, required: false
  private _pushflag?: number; 
  public get pushflag() {
    return this.getNumberAttribute('pushflag');
  }
  public set pushflag(value: number) {
    this._pushflag = value;
  }
  public resetPushflag() {
    this._pushflag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pushflagInput() {
    return this._pushflag;
  }

  // quantumsize - computed: true, optional: true, required: false
  private _quantumsize?: string; 
  public get quantumsize() {
    return this.getStringAttribute('quantumsize');
  }
  public set quantumsize(value: string) {
    this._quantumsize = value;
  }
  public resetQuantumsize() {
    this._quantumsize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get quantumsizeInput() {
    return this._quantumsize;
  }

  // redirectportrewrite - computed: true, optional: true, required: false
  private _redirectportrewrite?: string; 
  public get redirectportrewrite() {
    return this.getStringAttribute('redirectportrewrite');
  }
  public set redirectportrewrite(value: string) {
    this._redirectportrewrite = value;
  }
  public resetRedirectportrewrite() {
    this._redirectportrewrite = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get redirectportrewriteInput() {
    return this._redirectportrewrite;
  }

  // sendclosenotify - computed: true, optional: true, required: false
  private _sendclosenotify?: string; 
  public get sendclosenotify() {
    return this.getStringAttribute('sendclosenotify');
  }
  public set sendclosenotify(value: string) {
    this._sendclosenotify = value;
  }
  public resetSendclosenotify() {
    this._sendclosenotify = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sendclosenotifyInput() {
    return this._sendclosenotify;
  }

  // serverauth - computed: true, optional: true, required: false
  private _serverauth?: string; 
  public get serverauth() {
    return this.getStringAttribute('serverauth');
  }
  public set serverauth(value: string) {
    this._serverauth = value;
  }
  public resetServerauth() {
    this._serverauth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverauthInput() {
    return this._serverauth;
  }

  // sessionkeylifetime - computed: true, optional: true, required: false
  private _sessionkeylifetime?: number; 
  public get sessionkeylifetime() {
    return this.getNumberAttribute('sessionkeylifetime');
  }
  public set sessionkeylifetime(value: number) {
    this._sessionkeylifetime = value;
  }
  public resetSessionkeylifetime() {
    this._sessionkeylifetime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sessionkeylifetimeInput() {
    return this._sessionkeylifetime;
  }

  // sessionticket - computed: true, optional: true, required: false
  private _sessionticket?: string; 
  public get sessionticket() {
    return this.getStringAttribute('sessionticket');
  }
  public set sessionticket(value: string) {
    this._sessionticket = value;
  }
  public resetSessionticket() {
    this._sessionticket = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sessionticketInput() {
    return this._sessionticket;
  }

  // sessionticketkeydata - computed: true, optional: true, required: false
  private _sessionticketkeydata?: string; 
  public get sessionticketkeydata() {
    return this.getStringAttribute('sessionticketkeydata');
  }
  public set sessionticketkeydata(value: string) {
    this._sessionticketkeydata = value;
  }
  public resetSessionticketkeydata() {
    this._sessionticketkeydata = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sessionticketkeydataInput() {
    return this._sessionticketkeydata;
  }

  // sessionticketkeyrefresh - computed: true, optional: true, required: false
  private _sessionticketkeyrefresh?: string; 
  public get sessionticketkeyrefresh() {
    return this.getStringAttribute('sessionticketkeyrefresh');
  }
  public set sessionticketkeyrefresh(value: string) {
    this._sessionticketkeyrefresh = value;
  }
  public resetSessionticketkeyrefresh() {
    this._sessionticketkeyrefresh = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sessionticketkeyrefreshInput() {
    return this._sessionticketkeyrefresh;
  }

  // sessionticketlifetime - computed: true, optional: true, required: false
  private _sessionticketlifetime?: number; 
  public get sessionticketlifetime() {
    return this.getNumberAttribute('sessionticketlifetime');
  }
  public set sessionticketlifetime(value: number) {
    this._sessionticketlifetime = value;
  }
  public resetSessionticketlifetime() {
    this._sessionticketlifetime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sessionticketlifetimeInput() {
    return this._sessionticketlifetime;
  }

  // sessreuse - computed: true, optional: true, required: false
  private _sessreuse?: string; 
  public get sessreuse() {
    return this.getStringAttribute('sessreuse');
  }
  public set sessreuse(value: string) {
    this._sessreuse = value;
  }
  public resetSessreuse() {
    this._sessreuse = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sessreuseInput() {
    return this._sessreuse;
  }

  // sesstimeout - computed: true, optional: true, required: false
  private _sesstimeout?: number; 
  public get sesstimeout() {
    return this.getNumberAttribute('sesstimeout');
  }
  public set sesstimeout(value: number) {
    this._sesstimeout = value;
  }
  public resetSesstimeout() {
    this._sesstimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sesstimeoutInput() {
    return this._sesstimeout;
  }

  // skipclientcertpolicycheck - computed: true, optional: true, required: false
  private _skipclientcertpolicycheck?: string; 
  public get skipclientcertpolicycheck() {
    return this.getStringAttribute('skipclientcertpolicycheck');
  }
  public set skipclientcertpolicycheck(value: string) {
    this._skipclientcertpolicycheck = value;
  }
  public resetSkipclientcertpolicycheck() {
    this._skipclientcertpolicycheck = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get skipclientcertpolicycheckInput() {
    return this._skipclientcertpolicycheck;
  }

  // snienable - computed: true, optional: true, required: false
  private _snienable?: string; 
  public get snienable() {
    return this.getStringAttribute('snienable');
  }
  public set snienable(value: string) {
    this._snienable = value;
  }
  public resetSnienable() {
    this._snienable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snienableInput() {
    return this._snienable;
  }

  // snihttphostmatch - computed: true, optional: true, required: false
  private _snihttphostmatch?: string; 
  public get snihttphostmatch() {
    return this.getStringAttribute('snihttphostmatch');
  }
  public set snihttphostmatch(value: string) {
    this._snihttphostmatch = value;
  }
  public resetSnihttphostmatch() {
    this._snihttphostmatch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snihttphostmatchInput() {
    return this._snihttphostmatch;
  }

  // ssl3 - computed: true, optional: true, required: false
  private _ssl3?: string; 
  public get ssl3() {
    return this.getStringAttribute('ssl3');
  }
  public set ssl3(value: string) {
    this._ssl3 = value;
  }
  public resetSsl3() {
    this._ssl3 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ssl3Input() {
    return this._ssl3;
  }

  // sslimaxsessperserver - computed: true, optional: true, required: false
  private _sslimaxsessperserver?: number; 
  public get sslimaxsessperserver() {
    return this.getNumberAttribute('sslimaxsessperserver');
  }
  public set sslimaxsessperserver(value: number) {
    this._sslimaxsessperserver = value;
  }
  public resetSslimaxsessperserver() {
    this._sslimaxsessperserver = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslimaxsessperserverInput() {
    return this._sslimaxsessperserver;
  }

  // sslinterception - computed: true, optional: true, required: false
  private _sslinterception?: string; 
  public get sslinterception() {
    return this.getStringAttribute('sslinterception');
  }
  public set sslinterception(value: string) {
    this._sslinterception = value;
  }
  public resetSslinterception() {
    this._sslinterception = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslinterceptionInput() {
    return this._sslinterception;
  }

  // ssliocspcheck - computed: true, optional: true, required: false
  private _ssliocspcheck?: string; 
  public get ssliocspcheck() {
    return this.getStringAttribute('ssliocspcheck');
  }
  public set ssliocspcheck(value: string) {
    this._ssliocspcheck = value;
  }
  public resetSsliocspcheck() {
    this._ssliocspcheck = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ssliocspcheckInput() {
    return this._ssliocspcheck;
  }

  // sslireneg - computed: true, optional: true, required: false
  private _sslireneg?: string; 
  public get sslireneg() {
    return this.getStringAttribute('sslireneg');
  }
  public set sslireneg(value: string) {
    this._sslireneg = value;
  }
  public resetSslireneg() {
    this._sslireneg = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslirenegInput() {
    return this._sslireneg;
  }

  // ssllogprofile - computed: true, optional: true, required: false
  private _ssllogprofile?: string; 
  public get ssllogprofile() {
    return this.getStringAttribute('ssllogprofile');
  }
  public set ssllogprofile(value: string) {
    this._ssllogprofile = value;
  }
  public resetSsllogprofile() {
    this._ssllogprofile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ssllogprofileInput() {
    return this._ssllogprofile;
  }

  // sslprofiletype - computed: true, optional: true, required: false
  private _sslprofiletype?: string; 
  public get sslprofiletype() {
    return this.getStringAttribute('sslprofiletype');
  }
  public set sslprofiletype(value: string) {
    this._sslprofiletype = value;
  }
  public resetSslprofiletype() {
    this._sslprofiletype = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslprofiletypeInput() {
    return this._sslprofiletype;
  }

  // sslredirect - computed: true, optional: true, required: false
  private _sslredirect?: string; 
  public get sslredirect() {
    return this.getStringAttribute('sslredirect');
  }
  public set sslredirect(value: string) {
    this._sslredirect = value;
  }
  public resetSslredirect() {
    this._sslredirect = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslredirectInput() {
    return this._sslredirect;
  }

  // ssltriggertimeout - computed: true, optional: true, required: false
  private _ssltriggertimeout?: number; 
  public get ssltriggertimeout() {
    return this.getNumberAttribute('ssltriggertimeout');
  }
  public set ssltriggertimeout(value: number) {
    this._ssltriggertimeout = value;
  }
  public resetSsltriggertimeout() {
    this._ssltriggertimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ssltriggertimeoutInput() {
    return this._ssltriggertimeout;
  }

  // strictcachecks - computed: true, optional: true, required: false
  private _strictcachecks?: string; 
  public get strictcachecks() {
    return this.getStringAttribute('strictcachecks');
  }
  public set strictcachecks(value: string) {
    this._strictcachecks = value;
  }
  public resetStrictcachecks() {
    this._strictcachecks = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get strictcachecksInput() {
    return this._strictcachecks;
  }

  // strictsigdigestcheck - computed: true, optional: true, required: false
  private _strictsigdigestcheck?: string; 
  public get strictsigdigestcheck() {
    return this.getStringAttribute('strictsigdigestcheck');
  }
  public set strictsigdigestcheck(value: string) {
    this._strictsigdigestcheck = value;
  }
  public resetStrictsigdigestcheck() {
    this._strictsigdigestcheck = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get strictsigdigestcheckInput() {
    return this._strictsigdigestcheck;
  }

  // tls1 - computed: true, optional: true, required: false
  private _tls1?: string; 
  public get tls1() {
    return this.getStringAttribute('tls1');
  }
  public set tls1(value: string) {
    this._tls1 = value;
  }
  public resetTls1() {
    this._tls1 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tls1Input() {
    return this._tls1;
  }

  // tls11 - computed: true, optional: true, required: false
  private _tls11?: string; 
  public get tls11() {
    return this.getStringAttribute('tls11');
  }
  public set tls11(value: string) {
    this._tls11 = value;
  }
  public resetTls11() {
    this._tls11 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tls11Input() {
    return this._tls11;
  }

  // tls12 - computed: true, optional: true, required: false
  private _tls12?: string; 
  public get tls12() {
    return this.getStringAttribute('tls12');
  }
  public set tls12(value: string) {
    this._tls12 = value;
  }
  public resetTls12() {
    this._tls12 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tls12Input() {
    return this._tls12;
  }

  // tls13 - computed: true, optional: true, required: false
  private _tls13?: string; 
  public get tls13() {
    return this.getStringAttribute('tls13');
  }
  public set tls13(value: string) {
    this._tls13 = value;
  }
  public resetTls13() {
    this._tls13 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tls13Input() {
    return this._tls13;
  }

  // tls13sessionticketsperauthcontext - computed: true, optional: true, required: false
  private _tls13Sessionticketsperauthcontext?: number; 
  public get tls13Sessionticketsperauthcontext() {
    return this.getNumberAttribute('tls13sessionticketsperauthcontext');
  }
  public set tls13Sessionticketsperauthcontext(value: number) {
    this._tls13Sessionticketsperauthcontext = value;
  }
  public resetTls13Sessionticketsperauthcontext() {
    this._tls13Sessionticketsperauthcontext = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tls13SessionticketsperauthcontextInput() {
    return this._tls13Sessionticketsperauthcontext;
  }

  // zerorttearlydata - computed: true, optional: true, required: false
  private _zerorttearlydata?: string; 
  public get zerorttearlydata() {
    return this.getStringAttribute('zerorttearlydata');
  }
  public set zerorttearlydata(value: string) {
    this._zerorttearlydata = value;
  }
  public resetZerorttearlydata() {
    this._zerorttearlydata = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zerorttearlydataInput() {
    return this._zerorttearlydata;
  }

  // cipherbindings - computed: false, optional: true, required: false
  private _cipherbindings = new SslprofileCipherbindingsList(this, "cipherbindings", true);
  public get cipherbindings() {
    return this._cipherbindings;
  }
  public putCipherbindings(value: SslprofileCipherbindings[] | cdktf.IResolvable) {
    this._cipherbindings.internalValue = value;
  }
  public resetCipherbindings() {
    this._cipherbindings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cipherbindingsInput() {
    return this._cipherbindings.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      alpnprotocol: cdktf.stringToTerraform(this._alpnprotocol),
      ciphername: cdktf.stringToTerraform(this._ciphername),
      cipherpriority: cdktf.numberToTerraform(this._cipherpriority),
      cipherredirect: cdktf.stringToTerraform(this._cipherredirect),
      cipherurl: cdktf.stringToTerraform(this._cipherurl),
      cleartextport: cdktf.numberToTerraform(this._cleartextport),
      clientauth: cdktf.stringToTerraform(this._clientauth),
      clientauthuseboundcachain: cdktf.stringToTerraform(this._clientauthuseboundcachain),
      clientcert: cdktf.stringToTerraform(this._clientcert),
      commonname: cdktf.stringToTerraform(this._commonname),
      denysslreneg: cdktf.stringToTerraform(this._denysslreneg),
      dh: cdktf.stringToTerraform(this._dh),
      dhcount: cdktf.numberToTerraform(this._dhcount),
      dhekeyexchangewithpsk: cdktf.stringToTerraform(this._dhekeyexchangewithpsk),
      dhfile: cdktf.stringToTerraform(this._dhfile),
      dhkeyexpsizelimit: cdktf.stringToTerraform(this._dhkeyexpsizelimit),
      dropreqwithnohostheader: cdktf.stringToTerraform(this._dropreqwithnohostheader),
      ecccurvebindings: cdktf.listMapper(cdktf.stringToTerraform, false)(this._ecccurvebindings),
      encrypttriggerpktcount: cdktf.numberToTerraform(this._encrypttriggerpktcount),
      ersa: cdktf.stringToTerraform(this._ersa),
      ersacount: cdktf.numberToTerraform(this._ersacount),
      hsts: cdktf.stringToTerraform(this._hsts),
      id: cdktf.stringToTerraform(this._id),
      includesubdomains: cdktf.stringToTerraform(this._includesubdomains),
      insertionencoding: cdktf.stringToTerraform(this._insertionencoding),
      maxage: cdktf.numberToTerraform(this._maxage),
      name: cdktf.stringToTerraform(this._name),
      nodefaultbindings: cdktf.stringToTerraform(this._nodefaultbindings),
      nodefaultcipherbindings: cdktf.booleanToTerraform(this._nodefaultcipherbindings),
      nodefaultecccurvebindings: cdktf.booleanToTerraform(this._nodefaultecccurvebindings),
      ocspstapling: cdktf.stringToTerraform(this._ocspstapling),
      preload: cdktf.stringToTerraform(this._preload),
      prevsessionkeylifetime: cdktf.numberToTerraform(this._prevsessionkeylifetime),
      pushenctrigger: cdktf.stringToTerraform(this._pushenctrigger),
      pushenctriggertimeout: cdktf.numberToTerraform(this._pushenctriggertimeout),
      pushflag: cdktf.numberToTerraform(this._pushflag),
      quantumsize: cdktf.stringToTerraform(this._quantumsize),
      redirectportrewrite: cdktf.stringToTerraform(this._redirectportrewrite),
      sendclosenotify: cdktf.stringToTerraform(this._sendclosenotify),
      serverauth: cdktf.stringToTerraform(this._serverauth),
      sessionkeylifetime: cdktf.numberToTerraform(this._sessionkeylifetime),
      sessionticket: cdktf.stringToTerraform(this._sessionticket),
      sessionticketkeydata: cdktf.stringToTerraform(this._sessionticketkeydata),
      sessionticketkeyrefresh: cdktf.stringToTerraform(this._sessionticketkeyrefresh),
      sessionticketlifetime: cdktf.numberToTerraform(this._sessionticketlifetime),
      sessreuse: cdktf.stringToTerraform(this._sessreuse),
      sesstimeout: cdktf.numberToTerraform(this._sesstimeout),
      skipclientcertpolicycheck: cdktf.stringToTerraform(this._skipclientcertpolicycheck),
      snienable: cdktf.stringToTerraform(this._snienable),
      snihttphostmatch: cdktf.stringToTerraform(this._snihttphostmatch),
      ssl3: cdktf.stringToTerraform(this._ssl3),
      sslimaxsessperserver: cdktf.numberToTerraform(this._sslimaxsessperserver),
      sslinterception: cdktf.stringToTerraform(this._sslinterception),
      ssliocspcheck: cdktf.stringToTerraform(this._ssliocspcheck),
      sslireneg: cdktf.stringToTerraform(this._sslireneg),
      ssllogprofile: cdktf.stringToTerraform(this._ssllogprofile),
      sslprofiletype: cdktf.stringToTerraform(this._sslprofiletype),
      sslredirect: cdktf.stringToTerraform(this._sslredirect),
      ssltriggertimeout: cdktf.numberToTerraform(this._ssltriggertimeout),
      strictcachecks: cdktf.stringToTerraform(this._strictcachecks),
      strictsigdigestcheck: cdktf.stringToTerraform(this._strictsigdigestcheck),
      tls1: cdktf.stringToTerraform(this._tls1),
      tls11: cdktf.stringToTerraform(this._tls11),
      tls12: cdktf.stringToTerraform(this._tls12),
      tls13: cdktf.stringToTerraform(this._tls13),
      tls13sessionticketsperauthcontext: cdktf.numberToTerraform(this._tls13Sessionticketsperauthcontext),
      zerorttearlydata: cdktf.stringToTerraform(this._zerorttearlydata),
      cipherbindings: cdktf.listMapper(sslprofileCipherbindingsToTerraform, true)(this._cipherbindings.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      alpnprotocol: {
        value: cdktf.stringToHclTerraform(this._alpnprotocol),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ciphername: {
        value: cdktf.stringToHclTerraform(this._ciphername),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cipherpriority: {
        value: cdktf.numberToHclTerraform(this._cipherpriority),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      cipherredirect: {
        value: cdktf.stringToHclTerraform(this._cipherredirect),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cipherurl: {
        value: cdktf.stringToHclTerraform(this._cipherurl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cleartextport: {
        value: cdktf.numberToHclTerraform(this._cleartextport),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      clientauth: {
        value: cdktf.stringToHclTerraform(this._clientauth),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      clientauthuseboundcachain: {
        value: cdktf.stringToHclTerraform(this._clientauthuseboundcachain),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      clientcert: {
        value: cdktf.stringToHclTerraform(this._clientcert),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      commonname: {
        value: cdktf.stringToHclTerraform(this._commonname),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      denysslreneg: {
        value: cdktf.stringToHclTerraform(this._denysslreneg),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dh: {
        value: cdktf.stringToHclTerraform(this._dh),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dhcount: {
        value: cdktf.numberToHclTerraform(this._dhcount),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      dhekeyexchangewithpsk: {
        value: cdktf.stringToHclTerraform(this._dhekeyexchangewithpsk),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dhfile: {
        value: cdktf.stringToHclTerraform(this._dhfile),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dhkeyexpsizelimit: {
        value: cdktf.stringToHclTerraform(this._dhkeyexpsizelimit),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dropreqwithnohostheader: {
        value: cdktf.stringToHclTerraform(this._dropreqwithnohostheader),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ecccurvebindings: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._ecccurvebindings),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      encrypttriggerpktcount: {
        value: cdktf.numberToHclTerraform(this._encrypttriggerpktcount),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      ersa: {
        value: cdktf.stringToHclTerraform(this._ersa),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ersacount: {
        value: cdktf.numberToHclTerraform(this._ersacount),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      hsts: {
        value: cdktf.stringToHclTerraform(this._hsts),
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
      includesubdomains: {
        value: cdktf.stringToHclTerraform(this._includesubdomains),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      insertionencoding: {
        value: cdktf.stringToHclTerraform(this._insertionencoding),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      maxage: {
        value: cdktf.numberToHclTerraform(this._maxage),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      nodefaultbindings: {
        value: cdktf.stringToHclTerraform(this._nodefaultbindings),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      nodefaultcipherbindings: {
        value: cdktf.booleanToHclTerraform(this._nodefaultcipherbindings),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      nodefaultecccurvebindings: {
        value: cdktf.booleanToHclTerraform(this._nodefaultecccurvebindings),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      ocspstapling: {
        value: cdktf.stringToHclTerraform(this._ocspstapling),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      preload: {
        value: cdktf.stringToHclTerraform(this._preload),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      prevsessionkeylifetime: {
        value: cdktf.numberToHclTerraform(this._prevsessionkeylifetime),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      pushenctrigger: {
        value: cdktf.stringToHclTerraform(this._pushenctrigger),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      pushenctriggertimeout: {
        value: cdktf.numberToHclTerraform(this._pushenctriggertimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      pushflag: {
        value: cdktf.numberToHclTerraform(this._pushflag),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      quantumsize: {
        value: cdktf.stringToHclTerraform(this._quantumsize),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      redirectportrewrite: {
        value: cdktf.stringToHclTerraform(this._redirectportrewrite),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sendclosenotify: {
        value: cdktf.stringToHclTerraform(this._sendclosenotify),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      serverauth: {
        value: cdktf.stringToHclTerraform(this._serverauth),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sessionkeylifetime: {
        value: cdktf.numberToHclTerraform(this._sessionkeylifetime),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      sessionticket: {
        value: cdktf.stringToHclTerraform(this._sessionticket),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sessionticketkeydata: {
        value: cdktf.stringToHclTerraform(this._sessionticketkeydata),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sessionticketkeyrefresh: {
        value: cdktf.stringToHclTerraform(this._sessionticketkeyrefresh),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sessionticketlifetime: {
        value: cdktf.numberToHclTerraform(this._sessionticketlifetime),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      sessreuse: {
        value: cdktf.stringToHclTerraform(this._sessreuse),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sesstimeout: {
        value: cdktf.numberToHclTerraform(this._sesstimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      skipclientcertpolicycheck: {
        value: cdktf.stringToHclTerraform(this._skipclientcertpolicycheck),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      snienable: {
        value: cdktf.stringToHclTerraform(this._snienable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      snihttphostmatch: {
        value: cdktf.stringToHclTerraform(this._snihttphostmatch),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ssl3: {
        value: cdktf.stringToHclTerraform(this._ssl3),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sslimaxsessperserver: {
        value: cdktf.numberToHclTerraform(this._sslimaxsessperserver),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      sslinterception: {
        value: cdktf.stringToHclTerraform(this._sslinterception),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ssliocspcheck: {
        value: cdktf.stringToHclTerraform(this._ssliocspcheck),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sslireneg: {
        value: cdktf.stringToHclTerraform(this._sslireneg),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ssllogprofile: {
        value: cdktf.stringToHclTerraform(this._ssllogprofile),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sslprofiletype: {
        value: cdktf.stringToHclTerraform(this._sslprofiletype),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sslredirect: {
        value: cdktf.stringToHclTerraform(this._sslredirect),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ssltriggertimeout: {
        value: cdktf.numberToHclTerraform(this._ssltriggertimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      strictcachecks: {
        value: cdktf.stringToHclTerraform(this._strictcachecks),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      strictsigdigestcheck: {
        value: cdktf.stringToHclTerraform(this._strictsigdigestcheck),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tls1: {
        value: cdktf.stringToHclTerraform(this._tls1),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tls11: {
        value: cdktf.stringToHclTerraform(this._tls11),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tls12: {
        value: cdktf.stringToHclTerraform(this._tls12),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tls13: {
        value: cdktf.stringToHclTerraform(this._tls13),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tls13sessionticketsperauthcontext: {
        value: cdktf.numberToHclTerraform(this._tls13Sessionticketsperauthcontext),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      zerorttearlydata: {
        value: cdktf.stringToHclTerraform(this._zerorttearlydata),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cipherbindings: {
        value: cdktf.listMapperHcl(sslprofileCipherbindingsToHclTerraform, true)(this._cipherbindings.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "SslprofileCipherbindingsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
