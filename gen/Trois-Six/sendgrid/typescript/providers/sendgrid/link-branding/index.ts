// https://registry.terraform.io/providers/trois-six/sendgrid/0.2.1/docs/resources/link_branding
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface LinkBrandingConfig extends cdktf.TerraformMetaArguments {
  /**
  * Domain being authenticated.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/trois-six/sendgrid/0.2.1/docs/resources/link_branding#domain LinkBranding#domain}
  */
  readonly domain: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/trois-six/sendgrid/0.2.1/docs/resources/link_branding#id LinkBranding#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Indicates if this is the default link branding.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/trois-six/sendgrid/0.2.1/docs/resources/link_branding#is_default LinkBranding#is_default}
  */
  readonly isDefault?: boolean | cdktf.IResolvable;
  /**
  * The subdomain to use for this link branding.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/trois-six/sendgrid/0.2.1/docs/resources/link_branding#subdomain LinkBranding#subdomain}
  */
  readonly subdomain?: string;
  /**
  * Indicates if this is a valid link branding or not. Set to `true` to attempt validation on first update.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/trois-six/sendgrid/0.2.1/docs/resources/link_branding#valid LinkBranding#valid}
  */
  readonly valid?: boolean | cdktf.IResolvable;
}
export interface LinkBrandingDns {
}

export function linkBrandingDnsToTerraform(struct?: LinkBrandingDns): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function linkBrandingDnsToHclTerraform(struct?: LinkBrandingDns): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class LinkBrandingDnsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): LinkBrandingDns | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LinkBrandingDns | undefined) {
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

export class LinkBrandingDnsList extends cdktf.ComplexList {

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
  public get(index: number): LinkBrandingDnsOutputReference {
    return new LinkBrandingDnsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/trois-six/sendgrid/0.2.1/docs/resources/link_branding sendgrid_link_branding}
*/
export class LinkBranding extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "sendgrid_link_branding";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a LinkBranding resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the LinkBranding to import
  * @param importFromId The id of the existing LinkBranding that should be imported. Refer to the {@link https://registry.terraform.io/providers/trois-six/sendgrid/0.2.1/docs/resources/link_branding#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the LinkBranding to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "sendgrid_link_branding", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/trois-six/sendgrid/0.2.1/docs/resources/link_branding sendgrid_link_branding} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options LinkBrandingConfig
  */
  public constructor(scope: Construct, id: string, config: LinkBrandingConfig) {
    super(scope, id, {
      terraformResourceType: 'sendgrid_link_branding',
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
    this._domain = config.domain;
    this._id = config.id;
    this._isDefault = config.isDefault;
    this._subdomain = config.subdomain;
    this._valid = config.valid;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // dns - computed: true, optional: false, required: false
  private _dns = new LinkBrandingDnsList(this, "dns", false);
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
      domain: cdktf.stringToTerraform(this._domain),
      id: cdktf.stringToTerraform(this._id),
      is_default: cdktf.booleanToTerraform(this._isDefault),
      subdomain: cdktf.stringToTerraform(this._subdomain),
      valid: cdktf.booleanToTerraform(this._valid),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
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
