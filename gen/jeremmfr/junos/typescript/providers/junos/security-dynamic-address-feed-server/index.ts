// https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/security_dynamic_address_feed_server
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SecurityDynamicAddressFeedServerConfig extends cdktf.TerraformMetaArguments {
  /**
  * Text description of feed-server.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/security_dynamic_address_feed_server#description SecurityDynamicAddressFeedServer#description}
  */
  readonly description?: string;
  /**
  * Time to keep IP entry when update failed (seconds)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/security_dynamic_address_feed_server#hold_interval SecurityDynamicAddressFeedServer#hold_interval}
  */
  readonly holdInterval?: number;
  /**
  * Hostname or IP address of feed-server.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/security_dynamic_address_feed_server#hostname SecurityDynamicAddressFeedServer#hostname}
  */
  readonly hostname?: string;
  /**
  * Security dynamic address feed-server name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/security_dynamic_address_feed_server#name SecurityDynamicAddressFeedServer#name}
  */
  readonly name: string;
  /**
  * TLS profile.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/security_dynamic_address_feed_server#tls_profile SecurityDynamicAddressFeedServer#tls_profile}
  */
  readonly tlsProfile?: string;
  /**
  *  Interval to retrieve update (seconds).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/security_dynamic_address_feed_server#update_interval SecurityDynamicAddressFeedServer#update_interval}
  */
  readonly updateInterval?: number;
  /**
  * URL.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/security_dynamic_address_feed_server#url SecurityDynamicAddressFeedServer#url}
  */
  readonly url?: string;
  /**
  * Validate certificate attributes subject or subject alternative names must match feed server host name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/security_dynamic_address_feed_server#validate_certificate_attributes_subject_or_san SecurityDynamicAddressFeedServer#validate_certificate_attributes_subject_or_san}
  */
  readonly validateCertificateAttributesSubjectOrSan?: boolean | cdktf.IResolvable;
  /**
  * feed_name block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/security_dynamic_address_feed_server#feed_name SecurityDynamicAddressFeedServer#feed_name}
  */
  readonly feedName?: SecurityDynamicAddressFeedServerFeedName[] | cdktf.IResolvable;
}
export interface SecurityDynamicAddressFeedServerFeedName {
  /**
  * Text description of feed in feed-server.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/security_dynamic_address_feed_server#description SecurityDynamicAddressFeedServer#description}
  */
  readonly description?: string;
  /**
  * Time to keep IP entry when update failed (seconds).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/security_dynamic_address_feed_server#hold_interval SecurityDynamicAddressFeedServer#hold_interval}
  */
  readonly holdInterval?: number;
  /**
  * Security dynamic address feed name in feed-server.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/security_dynamic_address_feed_server#name SecurityDynamicAddressFeedServer#name}
  */
  readonly name: string;
  /**
  * Path of feed, appended to feed-server to form a complete URL.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/security_dynamic_address_feed_server#path SecurityDynamicAddressFeedServer#path}
  */
  readonly path: string;
  /**
  * Interval to retrieve update (seconds).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/security_dynamic_address_feed_server#update_interval SecurityDynamicAddressFeedServer#update_interval}
  */
  readonly updateInterval?: number;
}

export function securityDynamicAddressFeedServerFeedNameToTerraform(struct?: SecurityDynamicAddressFeedServerFeedName | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    description: cdktf.stringToTerraform(struct!.description),
    hold_interval: cdktf.numberToTerraform(struct!.holdInterval),
    name: cdktf.stringToTerraform(struct!.name),
    path: cdktf.stringToTerraform(struct!.path),
    update_interval: cdktf.numberToTerraform(struct!.updateInterval),
  }
}


export function securityDynamicAddressFeedServerFeedNameToHclTerraform(struct?: SecurityDynamicAddressFeedServerFeedName | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    hold_interval: {
      value: cdktf.numberToHclTerraform(struct!.holdInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    path: {
      value: cdktf.stringToHclTerraform(struct!.path),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    update_interval: {
      value: cdktf.numberToHclTerraform(struct!.updateInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecurityDynamicAddressFeedServerFeedNameOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SecurityDynamicAddressFeedServerFeedName | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._holdInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.holdInterval = this._holdInterval;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    if (this._updateInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.updateInterval = this._updateInterval;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecurityDynamicAddressFeedServerFeedName | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._description = undefined;
      this._holdInterval = undefined;
      this._name = undefined;
      this._path = undefined;
      this._updateInterval = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._description = value.description;
      this._holdInterval = value.holdInterval;
      this._name = value.name;
      this._path = value.path;
      this._updateInterval = value.updateInterval;
    }
  }

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // hold_interval - computed: false, optional: true, required: false
  private _holdInterval?: number; 
  public get holdInterval() {
    return this.getNumberAttribute('hold_interval');
  }
  public set holdInterval(value: number) {
    this._holdInterval = value;
  }
  public resetHoldInterval() {
    this._holdInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get holdIntervalInput() {
    return this._holdInterval;
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

  // path - computed: false, optional: false, required: true
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('path');
  }
  public set path(value: string) {
    this._path = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
  }

  // update_interval - computed: false, optional: true, required: false
  private _updateInterval?: number; 
  public get updateInterval() {
    return this.getNumberAttribute('update_interval');
  }
  public set updateInterval(value: number) {
    this._updateInterval = value;
  }
  public resetUpdateInterval() {
    this._updateInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateIntervalInput() {
    return this._updateInterval;
  }
}

export class SecurityDynamicAddressFeedServerFeedNameList extends cdktf.ComplexList {
  public internalValue? : SecurityDynamicAddressFeedServerFeedName[] | cdktf.IResolvable

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
  public get(index: number): SecurityDynamicAddressFeedServerFeedNameOutputReference {
    return new SecurityDynamicAddressFeedServerFeedNameOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/security_dynamic_address_feed_server junos_security_dynamic_address_feed_server}
*/
export class SecurityDynamicAddressFeedServer extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "junos_security_dynamic_address_feed_server";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SecurityDynamicAddressFeedServer resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SecurityDynamicAddressFeedServer to import
  * @param importFromId The id of the existing SecurityDynamicAddressFeedServer that should be imported. Refer to the {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/security_dynamic_address_feed_server#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SecurityDynamicAddressFeedServer to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "junos_security_dynamic_address_feed_server", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/security_dynamic_address_feed_server junos_security_dynamic_address_feed_server} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SecurityDynamicAddressFeedServerConfig
  */
  public constructor(scope: Construct, id: string, config: SecurityDynamicAddressFeedServerConfig) {
    super(scope, id, {
      terraformResourceType: 'junos_security_dynamic_address_feed_server',
      terraformGeneratorMetadata: {
        providerName: 'junos',
        providerVersion: '2.15.0',
        providerVersionConstraint: '2.15.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._description = config.description;
    this._holdInterval = config.holdInterval;
    this._hostname = config.hostname;
    this._name = config.name;
    this._tlsProfile = config.tlsProfile;
    this._updateInterval = config.updateInterval;
    this._url = config.url;
    this._validateCertificateAttributesSubjectOrSan = config.validateCertificateAttributesSubjectOrSan;
    this._feedName.internalValue = config.feedName;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // hold_interval - computed: false, optional: true, required: false
  private _holdInterval?: number; 
  public get holdInterval() {
    return this.getNumberAttribute('hold_interval');
  }
  public set holdInterval(value: number) {
    this._holdInterval = value;
  }
  public resetHoldInterval() {
    this._holdInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get holdIntervalInput() {
    return this._holdInterval;
  }

  // hostname - computed: false, optional: true, required: false
  private _hostname?: string; 
  public get hostname() {
    return this.getStringAttribute('hostname');
  }
  public set hostname(value: string) {
    this._hostname = value;
  }
  public resetHostname() {
    this._hostname = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostnameInput() {
    return this._hostname;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
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

  // tls_profile - computed: false, optional: true, required: false
  private _tlsProfile?: string; 
  public get tlsProfile() {
    return this.getStringAttribute('tls_profile');
  }
  public set tlsProfile(value: string) {
    this._tlsProfile = value;
  }
  public resetTlsProfile() {
    this._tlsProfile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsProfileInput() {
    return this._tlsProfile;
  }

  // update_interval - computed: false, optional: true, required: false
  private _updateInterval?: number; 
  public get updateInterval() {
    return this.getNumberAttribute('update_interval');
  }
  public set updateInterval(value: number) {
    this._updateInterval = value;
  }
  public resetUpdateInterval() {
    this._updateInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateIntervalInput() {
    return this._updateInterval;
  }

  // url - computed: false, optional: true, required: false
  private _url?: string; 
  public get url() {
    return this.getStringAttribute('url');
  }
  public set url(value: string) {
    this._url = value;
  }
  public resetUrl() {
    this._url = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get urlInput() {
    return this._url;
  }

  // validate_certificate_attributes_subject_or_san - computed: false, optional: true, required: false
  private _validateCertificateAttributesSubjectOrSan?: boolean | cdktf.IResolvable; 
  public get validateCertificateAttributesSubjectOrSan() {
    return this.getBooleanAttribute('validate_certificate_attributes_subject_or_san');
  }
  public set validateCertificateAttributesSubjectOrSan(value: boolean | cdktf.IResolvable) {
    this._validateCertificateAttributesSubjectOrSan = value;
  }
  public resetValidateCertificateAttributesSubjectOrSan() {
    this._validateCertificateAttributesSubjectOrSan = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get validateCertificateAttributesSubjectOrSanInput() {
    return this._validateCertificateAttributesSubjectOrSan;
  }

  // feed_name - computed: false, optional: true, required: false
  private _feedName = new SecurityDynamicAddressFeedServerFeedNameList(this, "feed_name", false);
  public get feedName() {
    return this._feedName;
  }
  public putFeedName(value: SecurityDynamicAddressFeedServerFeedName[] | cdktf.IResolvable) {
    this._feedName.internalValue = value;
  }
  public resetFeedName() {
    this._feedName.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get feedNameInput() {
    return this._feedName.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      hold_interval: cdktf.numberToTerraform(this._holdInterval),
      hostname: cdktf.stringToTerraform(this._hostname),
      name: cdktf.stringToTerraform(this._name),
      tls_profile: cdktf.stringToTerraform(this._tlsProfile),
      update_interval: cdktf.numberToTerraform(this._updateInterval),
      url: cdktf.stringToTerraform(this._url),
      validate_certificate_attributes_subject_or_san: cdktf.booleanToTerraform(this._validateCertificateAttributesSubjectOrSan),
      feed_name: cdktf.listMapper(securityDynamicAddressFeedServerFeedNameToTerraform, true)(this._feedName.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      hold_interval: {
        value: cdktf.numberToHclTerraform(this._holdInterval),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      hostname: {
        value: cdktf.stringToHclTerraform(this._hostname),
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
      tls_profile: {
        value: cdktf.stringToHclTerraform(this._tlsProfile),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      update_interval: {
        value: cdktf.numberToHclTerraform(this._updateInterval),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      url: {
        value: cdktf.stringToHclTerraform(this._url),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      validate_certificate_attributes_subject_or_san: {
        value: cdktf.booleanToHclTerraform(this._validateCertificateAttributesSubjectOrSan),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      feed_name: {
        value: cdktf.listMapperHcl(securityDynamicAddressFeedServerFeedNameToHclTerraform, true)(this._feedName.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SecurityDynamicAddressFeedServerFeedNameList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
