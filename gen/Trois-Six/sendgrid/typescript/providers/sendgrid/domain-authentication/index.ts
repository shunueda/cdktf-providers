// https://registry.terraform.io/providers/trois-six/sendgrid/0.2.1/docs/resources/domain_authentication
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DomainAuthenticationConfig extends cdktf.TerraformMetaArguments {
  /**
  * Whether to allow SendGrid to manage your SPF records, DKIM keys, and DKIM key rotation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/trois-six/sendgrid/0.2.1/docs/resources/domain_authentication#automatic_security DomainAuthentication#automatic_security}
  */
  readonly automaticSecurity?: boolean | cdktf.IResolvable;
  /**
  * Add a custom DKIM selector. Accepts three letters or numbers.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/trois-six/sendgrid/0.2.1/docs/resources/domain_authentication#custom_dkim_selector DomainAuthentication#custom_dkim_selector}
  */
  readonly customDkimSelector?: string;
  /**
  * Specify whether to use a custom SPF or allow SendGrid to manage your SPF. This option is only available to authenticated domains set up for manual security.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/trois-six/sendgrid/0.2.1/docs/resources/domain_authentication#custom_spf DomainAuthentication#custom_spf}
  */
  readonly customSpf?: boolean | cdktf.IResolvable;
  /**
  * Domain being authenticated.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/trois-six/sendgrid/0.2.1/docs/resources/domain_authentication#domain DomainAuthentication#domain}
  */
  readonly domain: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/trois-six/sendgrid/0.2.1/docs/resources/domain_authentication#id DomainAuthentication#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The IP addresses that will be included in the custom SPF record for this.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/trois-six/sendgrid/0.2.1/docs/resources/domain_authentication#ips DomainAuthentication#ips}
  */
  readonly ips?: string[];
  /**
  * Whether to use this authenticated domain as the fallback if no authenticated domains match the sender's domain.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/trois-six/sendgrid/0.2.1/docs/resources/domain_authentication#is_default DomainAuthentication#is_default}
  */
  readonly isDefault?: boolean | cdktf.IResolvable;
  /**
  * The subdomain to use for this authenticated domain.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/trois-six/sendgrid/0.2.1/docs/resources/domain_authentication#subdomain DomainAuthentication#subdomain}
  */
  readonly subdomain?: string;
  /**
  * Indicates if this is a valid authenticated domain or not.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/trois-six/sendgrid/0.2.1/docs/resources/domain_authentication#valid DomainAuthentication#valid}
  */
  readonly valid?: boolean | cdktf.IResolvable;
}
export interface DomainAuthenticationDns {
}

export function domainAuthenticationDnsToTerraform(struct?: DomainAuthenticationDns): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function domainAuthenticationDnsToHclTerraform(struct?: DomainAuthenticationDns): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DomainAuthenticationDnsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DomainAuthenticationDns | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DomainAuthenticationDns | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // data - computed: true, optional: false, required: false
  public get data() {
    return this.getStringAttribute('data');
  }

  // host - computed: true, optional: false, required: false
  public get host() {
    return this.getStringAttribute('host');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // valid - computed: true, optional: false, required: false
  public get valid() {
    return this.getBooleanAttribute('valid');
  }
}

export class DomainAuthenticationDnsList extends cdktf.ComplexList {

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
  public get(index: number): DomainAuthenticationDnsOutputReference {
    return new DomainAuthenticationDnsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/trois-six/sendgrid/0.2.1/docs/resources/domain_authentication sendgrid_domain_authentication}
*/
export class DomainAuthentication extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "sendgrid_domain_authentication";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DomainAuthentication resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DomainAuthentication to import
  * @param importFromId The id of the existing DomainAuthentication that should be imported. Refer to the {@link https://registry.terraform.io/providers/trois-six/sendgrid/0.2.1/docs/resources/domain_authentication#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DomainAuthentication to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "sendgrid_domain_authentication", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/trois-six/sendgrid/0.2.1/docs/resources/domain_authentication sendgrid_domain_authentication} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DomainAuthenticationConfig
  */
  public constructor(scope: Construct, id: string, config: DomainAuthenticationConfig) {
    super(scope, id, {
      terraformResourceType: 'sendgrid_domain_authentication',
      terraformGeneratorMetadata: {
        providerName: 'sendgrid',
        providerVersion: '0.2.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._automaticSecurity = config.automaticSecurity;
    this._customDkimSelector = config.customDkimSelector;
    this._customSpf = config.customSpf;
    this._domain = config.domain;
    this._id = config.id;
    this._ips = config.ips;
    this._isDefault = config.isDefault;
    this._subdomain = config.subdomain;
    this._valid = config.valid;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // automatic_security - computed: false, optional: true, required: false
  private _automaticSecurity?: boolean | cdktf.IResolvable; 
  public get automaticSecurity() {
    return this.getBooleanAttribute('automatic_security');
  }
  public set automaticSecurity(value: boolean | cdktf.IResolvable) {
    this._automaticSecurity = value;
  }
  public resetAutomaticSecurity() {
    this._automaticSecurity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get automaticSecurityInput() {
    return this._automaticSecurity;
  }

  // custom_dkim_selector - computed: false, optional: true, required: false
  private _customDkimSelector?: string; 
  public get customDkimSelector() {
    return this.getStringAttribute('custom_dkim_selector');
  }
  public set customDkimSelector(value: string) {
    this._customDkimSelector = value;
  }
  public resetCustomDkimSelector() {
    this._customDkimSelector = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customDkimSelectorInput() {
    return this._customDkimSelector;
  }

  // custom_spf - computed: false, optional: true, required: false
  private _customSpf?: boolean | cdktf.IResolvable; 
  public get customSpf() {
    return this.getBooleanAttribute('custom_spf');
  }
  public set customSpf(value: boolean | cdktf.IResolvable) {
    this._customSpf = value;
  }
  public resetCustomSpf() {
    this._customSpf = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customSpfInput() {
    return this._customSpf;
  }

  // dns - computed: true, optional: false, required: false
  private _dns = new DomainAuthenticationDnsList(this, "dns", false);
  public get dns() {
    return this._dns;
  }

  // domain - computed: false, optional: false, required: true
  private _domain?: string; 
  public get domain() {
    return this.getStringAttribute('domain');
  }
  public set domain(value: string) {
    this._domain = value;
  }
  // Temporarily expose input value. Use with caution.
  public get domainInput() {
    return this._domain;
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

  // ips - computed: true, optional: true, required: false
  private _ips?: string[]; 
  public get ips() {
    return cdktf.Fn.tolist(this.getListAttribute('ips'));
  }
  public set ips(value: string[]) {
    this._ips = value;
  }
  public resetIps() {
    this._ips = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipsInput() {
    return this._ips;
  }

  // is_default - computed: false, optional: true, required: false
  private _isDefault?: boolean | cdktf.IResolvable; 
  public get isDefault() {
    return this.getBooleanAttribute('is_default');
  }
  public set isDefault(value: boolean | cdktf.IResolvable) {
    this._isDefault = value;
  }
  public resetIsDefault() {
    this._isDefault = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isDefaultInput() {
    return this._isDefault;
  }

  // subdomain - computed: true, optional: true, required: false
  private _subdomain?: string; 
  public get subdomain() {
    return this.getStringAttribute('subdomain');
  }
  public set subdomain(value: string) {
    this._subdomain = value;
  }
  public resetSubdomain() {
    this._subdomain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subdomainInput() {
    return this._subdomain;
  }

  // username - computed: true, optional: false, required: false
  public get username() {
    return this.getStringAttribute('username');
  }

  // valid - computed: true, optional: true, required: false
  private _valid?: boolean | cdktf.IResolvable; 
  public get valid() {
    return this.getBooleanAttribute('valid');
  }
  public set valid(value: boolean | cdktf.IResolvable) {
    this._valid = value;
  }
  public resetValid() {
    this._valid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get validInput() {
    return this._valid;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      automatic_security: cdktf.booleanToTerraform(this._automaticSecurity),
      custom_dkim_selector: cdktf.stringToTerraform(this._customDkimSelector),
      custom_spf: cdktf.booleanToTerraform(this._customSpf),
      domain: cdktf.stringToTerraform(this._domain),
      id: cdktf.stringToTerraform(this._id),
      ips: cdktf.listMapper(cdktf.stringToTerraform, false)(this._ips),
      is_default: cdktf.booleanToTerraform(this._isDefault),
      subdomain: cdktf.stringToTerraform(this._subdomain),
      valid: cdktf.booleanToTerraform(this._valid),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      automatic_security: {
        value: cdktf.booleanToHclTerraform(this._automaticSecurity),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      custom_dkim_selector: {
        value: cdktf.stringToHclTerraform(this._customDkimSelector),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      custom_spf: {
        value: cdktf.booleanToHclTerraform(this._customSpf),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      domain: {
        value: cdktf.stringToHclTerraform(this._domain),
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
      ips: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._ips),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      is_default: {
        value: cdktf.booleanToHclTerraform(this._isDefault),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      subdomain: {
        value: cdktf.stringToHclTerraform(this._subdomain),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      valid: {
        value: cdktf.booleanToHclTerraform(this._valid),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
