// https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_trusted_client
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ManagementTrustedClientConfig extends cdktf.TerraformMetaArguments {
  /**
  * Color of the object. Should be one of existing colors.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_trusted_client#color ManagementTrustedClient#color}
  */
  readonly color?: string;
  /**
  * Comments string.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_trusted_client#comments ManagementTrustedClient#comments}
  */
  readonly comments?: string;
  /**
  * Domains to be added to this profile. Use domain name only. See example below: "add-trusted-client (with domain)".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_trusted_client#domains_assignment ManagementTrustedClient#domains_assignment}
  */
  readonly domainsAssignment?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_trusted_client#id ManagementTrustedClient#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Apply changes ignoring errors. You won't be able to publish such a changes. If ignore-warnings flag was omitted - warnings will also be ignored.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_trusted_client#ignore_errors ManagementTrustedClient#ignore_errors}
  */
  readonly ignoreErrors?: boolean | cdktf.IResolvable;
  /**
  * Apply changes ignoring warnings.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_trusted_client#ignore_warnings ManagementTrustedClient#ignore_warnings}
  */
  readonly ignoreWarnings?: boolean | cdktf.IResolvable;
  /**
  * IPv4 address.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_trusted_client#ipv4_address ManagementTrustedClient#ipv4_address}
  */
  readonly ipv4Address?: string;
  /**
  * First IPv4 address in the range.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_trusted_client#ipv4_address_first ManagementTrustedClient#ipv4_address_first}
  */
  readonly ipv4AddressFirst?: string;
  /**
  * Last IPv4 address in the range.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_trusted_client#ipv4_address_last ManagementTrustedClient#ipv4_address_last}
  */
  readonly ipv4AddressLast?: string;
  /**
  * IPv6 address.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_trusted_client#ipv6_address ManagementTrustedClient#ipv6_address}
  */
  readonly ipv6Address?: string;
  /**
  * First IPv6 address in the range.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_trusted_client#ipv6_address_first ManagementTrustedClient#ipv6_address_first}
  */
  readonly ipv6AddressFirst?: string;
  /**
  * Last IPv6 address in the range.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_trusted_client#ipv6_address_last ManagementTrustedClient#ipv6_address_last}
  */
  readonly ipv6AddressLast?: string;
  /**
  * IPv4 mask length.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_trusted_client#mask_length4 ManagementTrustedClient#mask_length4}
  */
  readonly maskLength4?: number;
  /**
  * IPv6 mask length.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_trusted_client#mask_length6 ManagementTrustedClient#mask_length6}
  */
  readonly maskLength6?: number;
  /**
  * Let this trusted client connect to all Multi-Domain Servers in the deployment.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_trusted_client#multi_domain_server_trusted_client ManagementTrustedClient#multi_domain_server_trusted_client}
  */
  readonly multiDomainServerTrustedClient?: boolean | cdktf.IResolvable;
  /**
  * Object name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_trusted_client#name ManagementTrustedClient#name}
  */
  readonly name: string;
  /**
  * Collection of tag identifiers.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_trusted_client#tags ManagementTrustedClient#tags}
  */
  readonly tags?: string[];
  /**
  * Trusted client type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_trusted_client#type ManagementTrustedClient#type}
  */
  readonly type?: string;
  /**
  * IP wild card (e.g. 192.0.2.*).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_trusted_client#wild_card ManagementTrustedClient#wild_card}
  */
  readonly wildCard?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_trusted_client checkpoint_management_trusted_client}
*/
export class ManagementTrustedClient extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "checkpoint_management_trusted_client";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ManagementTrustedClient resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ManagementTrustedClient to import
  * @param importFromId The id of the existing ManagementTrustedClient that should be imported. Refer to the {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_trusted_client#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ManagementTrustedClient to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "checkpoint_management_trusted_client", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_trusted_client checkpoint_management_trusted_client} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ManagementTrustedClientConfig
  */
  public constructor(scope: Construct, id: string, config: ManagementTrustedClientConfig) {
    super(scope, id, {
      terraformResourceType: 'checkpoint_management_trusted_client',
      terraformGeneratorMetadata: {
        providerName: 'checkpoint',
        providerVersion: '2.11.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._color = config.color;
    this._comments = config.comments;
    this._domainsAssignment = config.domainsAssignment;
    this._id = config.id;
    this._ignoreErrors = config.ignoreErrors;
    this._ignoreWarnings = config.ignoreWarnings;
    this._ipv4Address = config.ipv4Address;
    this._ipv4AddressFirst = config.ipv4AddressFirst;
    this._ipv4AddressLast = config.ipv4AddressLast;
    this._ipv6Address = config.ipv6Address;
    this._ipv6AddressFirst = config.ipv6AddressFirst;
    this._ipv6AddressLast = config.ipv6AddressLast;
    this._maskLength4 = config.maskLength4;
    this._maskLength6 = config.maskLength6;
    this._multiDomainServerTrustedClient = config.multiDomainServerTrustedClient;
    this._name = config.name;
    this._tags = config.tags;
    this._type = config.type;
    this._wildCard = config.wildCard;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // color - computed: false, optional: true, required: false
  private _color?: string; 
  public get color() {
    return this.getStringAttribute('color');
  }
  public set color(value: string) {
    this._color = value;
  }
  public resetColor() {
    this._color = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get colorInput() {
    return this._color;
  }

  // comments - computed: false, optional: true, required: false
  private _comments?: string; 
  public get comments() {
    return this.getStringAttribute('comments');
  }
  public set comments(value: string) {
    this._comments = value;
  }
  public resetComments() {
    this._comments = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commentsInput() {
    return this._comments;
  }

  // domains_assignment - computed: false, optional: true, required: false
  private _domainsAssignment?: string[]; 
  public get domainsAssignment() {
    return cdktf.Fn.tolist(this.getListAttribute('domains_assignment'));
  }
  public set domainsAssignment(value: string[]) {
    this._domainsAssignment = value;
  }
  public resetDomainsAssignment() {
    this._domainsAssignment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get domainsAssignmentInput() {
    return this._domainsAssignment;
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

  // ignore_errors - computed: false, optional: true, required: false
  private _ignoreErrors?: boolean | cdktf.IResolvable; 
  public get ignoreErrors() {
    return this.getBooleanAttribute('ignore_errors');
  }
  public set ignoreErrors(value: boolean | cdktf.IResolvable) {
    this._ignoreErrors = value;
  }
  public resetIgnoreErrors() {
    this._ignoreErrors = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoreErrorsInput() {
    return this._ignoreErrors;
  }

  // ignore_warnings - computed: false, optional: true, required: false
  private _ignoreWarnings?: boolean | cdktf.IResolvable; 
  public get ignoreWarnings() {
    return this.getBooleanAttribute('ignore_warnings');
  }
  public set ignoreWarnings(value: boolean | cdktf.IResolvable) {
    this._ignoreWarnings = value;
  }
  public resetIgnoreWarnings() {
    this._ignoreWarnings = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoreWarningsInput() {
    return this._ignoreWarnings;
  }

  // ipv4_address - computed: false, optional: true, required: false
  private _ipv4Address?: string; 
  public get ipv4Address() {
    return this.getStringAttribute('ipv4_address');
  }
  public set ipv4Address(value: string) {
    this._ipv4Address = value;
  }
  public resetIpv4Address() {
    this._ipv4Address = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4AddressInput() {
    return this._ipv4Address;
  }

  // ipv4_address_first - computed: false, optional: true, required: false
  private _ipv4AddressFirst?: string; 
  public get ipv4AddressFirst() {
    return this.getStringAttribute('ipv4_address_first');
  }
  public set ipv4AddressFirst(value: string) {
    this._ipv4AddressFirst = value;
  }
  public resetIpv4AddressFirst() {
    this._ipv4AddressFirst = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4AddressFirstInput() {
    return this._ipv4AddressFirst;
  }

  // ipv4_address_last - computed: false, optional: true, required: false
  private _ipv4AddressLast?: string; 
  public get ipv4AddressLast() {
    return this.getStringAttribute('ipv4_address_last');
  }
  public set ipv4AddressLast(value: string) {
    this._ipv4AddressLast = value;
  }
  public resetIpv4AddressLast() {
    this._ipv4AddressLast = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4AddressLastInput() {
    return this._ipv4AddressLast;
  }

  // ipv6_address - computed: false, optional: true, required: false
  private _ipv6Address?: string; 
  public get ipv6Address() {
    return this.getStringAttribute('ipv6_address');
  }
  public set ipv6Address(value: string) {
    this._ipv6Address = value;
  }
  public resetIpv6Address() {
    this._ipv6Address = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6AddressInput() {
    return this._ipv6Address;
  }

  // ipv6_address_first - computed: false, optional: true, required: false
  private _ipv6AddressFirst?: string; 
  public get ipv6AddressFirst() {
    return this.getStringAttribute('ipv6_address_first');
  }
  public set ipv6AddressFirst(value: string) {
    this._ipv6AddressFirst = value;
  }
  public resetIpv6AddressFirst() {
    this._ipv6AddressFirst = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6AddressFirstInput() {
    return this._ipv6AddressFirst;
  }

  // ipv6_address_last - computed: false, optional: true, required: false
  private _ipv6AddressLast?: string; 
  public get ipv6AddressLast() {
    return this.getStringAttribute('ipv6_address_last');
  }
  public set ipv6AddressLast(value: string) {
    this._ipv6AddressLast = value;
  }
  public resetIpv6AddressLast() {
    this._ipv6AddressLast = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6AddressLastInput() {
    return this._ipv6AddressLast;
  }

  // mask_length4 - computed: false, optional: true, required: false
  private _maskLength4?: number; 
  public get maskLength4() {
    return this.getNumberAttribute('mask_length4');
  }
  public set maskLength4(value: number) {
    this._maskLength4 = value;
  }
  public resetMaskLength4() {
    this._maskLength4 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maskLength4Input() {
    return this._maskLength4;
  }

  // mask_length6 - computed: false, optional: true, required: false
  private _maskLength6?: number; 
  public get maskLength6() {
    return this.getNumberAttribute('mask_length6');
  }
  public set maskLength6(value: number) {
    this._maskLength6 = value;
  }
  public resetMaskLength6() {
    this._maskLength6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maskLength6Input() {
    return this._maskLength6;
  }

  // multi_domain_server_trusted_client - computed: false, optional: true, required: false
  private _multiDomainServerTrustedClient?: boolean | cdktf.IResolvable; 
  public get multiDomainServerTrustedClient() {
    return this.getBooleanAttribute('multi_domain_server_trusted_client');
  }
  public set multiDomainServerTrustedClient(value: boolean | cdktf.IResolvable) {
    this._multiDomainServerTrustedClient = value;
  }
  public resetMultiDomainServerTrustedClient() {
    this._multiDomainServerTrustedClient = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get multiDomainServerTrustedClientInput() {
    return this._multiDomainServerTrustedClient;
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

  // tags - computed: false, optional: true, required: false
  private _tags?: string[]; 
  public get tags() {
    return cdktf.Fn.tolist(this.getListAttribute('tags'));
  }
  public set tags(value: string[]) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // type - computed: false, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // wild_card - computed: false, optional: true, required: false
  private _wildCard?: string; 
  public get wildCard() {
    return this.getStringAttribute('wild_card');
  }
  public set wildCard(value: string) {
    this._wildCard = value;
  }
  public resetWildCard() {
    this._wildCard = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get wildCardInput() {
    return this._wildCard;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      color: cdktf.stringToTerraform(this._color),
      comments: cdktf.stringToTerraform(this._comments),
      domains_assignment: cdktf.listMapper(cdktf.stringToTerraform, false)(this._domainsAssignment),
      id: cdktf.stringToTerraform(this._id),
      ignore_errors: cdktf.booleanToTerraform(this._ignoreErrors),
      ignore_warnings: cdktf.booleanToTerraform(this._ignoreWarnings),
      ipv4_address: cdktf.stringToTerraform(this._ipv4Address),
      ipv4_address_first: cdktf.stringToTerraform(this._ipv4AddressFirst),
      ipv4_address_last: cdktf.stringToTerraform(this._ipv4AddressLast),
      ipv6_address: cdktf.stringToTerraform(this._ipv6Address),
      ipv6_address_first: cdktf.stringToTerraform(this._ipv6AddressFirst),
      ipv6_address_last: cdktf.stringToTerraform(this._ipv6AddressLast),
      mask_length4: cdktf.numberToTerraform(this._maskLength4),
      mask_length6: cdktf.numberToTerraform(this._maskLength6),
      multi_domain_server_trusted_client: cdktf.booleanToTerraform(this._multiDomainServerTrustedClient),
      name: cdktf.stringToTerraform(this._name),
      tags: cdktf.listMapper(cdktf.stringToTerraform, false)(this._tags),
      type: cdktf.stringToTerraform(this._type),
      wild_card: cdktf.stringToTerraform(this._wildCard),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      color: {
        value: cdktf.stringToHclTerraform(this._color),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      comments: {
        value: cdktf.stringToHclTerraform(this._comments),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      domains_assignment: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._domainsAssignment),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ignore_errors: {
        value: cdktf.booleanToHclTerraform(this._ignoreErrors),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      ignore_warnings: {
        value: cdktf.booleanToHclTerraform(this._ignoreWarnings),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      ipv4_address: {
        value: cdktf.stringToHclTerraform(this._ipv4Address),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ipv4_address_first: {
        value: cdktf.stringToHclTerraform(this._ipv4AddressFirst),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ipv4_address_last: {
        value: cdktf.stringToHclTerraform(this._ipv4AddressLast),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ipv6_address: {
        value: cdktf.stringToHclTerraform(this._ipv6Address),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ipv6_address_first: {
        value: cdktf.stringToHclTerraform(this._ipv6AddressFirst),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ipv6_address_last: {
        value: cdktf.stringToHclTerraform(this._ipv6AddressLast),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      mask_length4: {
        value: cdktf.numberToHclTerraform(this._maskLength4),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      mask_length6: {
        value: cdktf.numberToHclTerraform(this._maskLength6),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      multi_domain_server_trusted_client: {
        value: cdktf.booleanToHclTerraform(this._multiDomainServerTrustedClient),
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
      tags: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._tags),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      type: {
        value: cdktf.stringToHclTerraform(this._type),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      wild_card: {
        value: cdktf.stringToHclTerraform(this._wildCard),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
