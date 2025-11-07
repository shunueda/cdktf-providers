// https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/property_hostname_bucket
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface PropertyHostnameBucketConfig extends cdktf.TerraformMetaArguments {
  /**
  * The unique identifier for the contract. Provide it if resolving the property without 'contract_id' and 'group_id' is not possible
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/property_hostname_bucket#contract_id PropertyHostnameBucket#contract_id}
  */
  readonly contractId?: string;
  /**
  * The unique identifier for the group. Provide it if resolving the property without 'contract_id' and 'group_id' is not possible
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/property_hostname_bucket#group_id PropertyHostnameBucket#group_id}
  */
  readonly groupId?: string;
  /**
  * The computed number of hostnames after applying desired modifications. Used only to informduring the plan phase about the number of hostnames that will be active after making the changes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/property_hostname_bucket#hostname_count PropertyHostnameBucket#hostname_count}
  */
  readonly hostnameCount?: number;
  /**
  * The hostnames mapping. The key represents 'cname_from' and the value contains hostnames details, consisting of certificate provisioning type and edge hostname.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/property_hostname_bucket#hostnames PropertyHostnameBucket#hostnames}
  */
  readonly hostnames: { [key: string]: PropertyHostnameBucketHostnames } | cdktf.IResolvable;
  /**
  * The network to activate on, either `STAGING` or `PRODUCTION`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/property_hostname_bucket#network PropertyHostnameBucket#network}
  */
  readonly network: string;
  /**
  * Assigns a log message to the request.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/property_hostname_bucket#note PropertyHostnameBucket#note}
  */
  readonly note?: string;
  /**
  * Email addresses to notify when the activation status changes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/property_hostname_bucket#notify_emails PropertyHostnameBucket#notify_emails}
  */
  readonly notifyEmails?: string[];
  /**
  * The unique identifier for the property.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/property_hostname_bucket#property_id PropertyHostnameBucket#property_id}
  */
  readonly propertyId: string;
  /**
  * The timeout value in minutes after which a single hostname activation will be canceled. Defaults to 120 minutes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/property_hostname_bucket#timeout_for_activation PropertyHostnameBucket#timeout_for_activation}
  */
  readonly timeoutForActivation?: number;
}
export interface PropertyHostnameBucketHostnames {
  /**
  * Indicates the type of the certificate used in the property hostname. Either `CPS_MANAGED` for certificates you create with the Certificate Provisioning System (CPS) API, or `DEFAULT` for Domain Validation (DV) certificates deployed automatically.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/property_hostname_bucket#cert_provisioning_type PropertyHostnameBucket#cert_provisioning_type}
  */
  readonly certProvisioningType: string;
  /**
  * Identifies the edge hostname you mapped your traffic to on the production network.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/property_hostname_bucket#edge_hostname_id PropertyHostnameBucket#edge_hostname_id}
  */
  readonly edgeHostnameId: string;
}

export function propertyHostnameBucketHostnamesToTerraform(struct?: PropertyHostnameBucketHostnames | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cert_provisioning_type: cdktf.stringToTerraform(struct!.certProvisioningType),
    edge_hostname_id: cdktf.stringToTerraform(struct!.edgeHostnameId),
  }
}


export function propertyHostnameBucketHostnamesToHclTerraform(struct?: PropertyHostnameBucketHostnames | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cert_provisioning_type: {
      value: cdktf.stringToHclTerraform(struct!.certProvisioningType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    edge_hostname_id: {
      value: cdktf.stringToHclTerraform(struct!.edgeHostnameId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PropertyHostnameBucketHostnamesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectKey the key of this item in the map
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectKey: string) {
    super(terraformResource, terraformAttribute, false, complexObjectKey);
  }

  public get internalValue(): PropertyHostnameBucketHostnames | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._certProvisioningType !== undefined) {
      hasAnyValues = true;
      internalValueResult.certProvisioningType = this._certProvisioningType;
    }
    if (this._edgeHostnameId !== undefined) {
      hasAnyValues = true;
      internalValueResult.edgeHostnameId = this._edgeHostnameId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PropertyHostnameBucketHostnames | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._certProvisioningType = undefined;
      this._edgeHostnameId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._certProvisioningType = value.certProvisioningType;
      this._edgeHostnameId = value.edgeHostnameId;
    }
  }

  // cert_provisioning_type - computed: false, optional: false, required: true
  private _certProvisioningType?: string; 
  public get certProvisioningType() {
    return this.getStringAttribute('cert_provisioning_type');
  }
  public set certProvisioningType(value: string) {
    this._certProvisioningType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get certProvisioningTypeInput() {
    return this._certProvisioningType;
  }

  // cname_to - computed: true, optional: false, required: false
  public get cnameTo() {
    return this.getStringAttribute('cname_to');
  }

  // edge_hostname_id - computed: false, optional: false, required: true
  private _edgeHostnameId?: string; 
  public get edgeHostnameId() {
    return this.getStringAttribute('edge_hostname_id');
  }
  public set edgeHostnameId(value: string) {
    this._edgeHostnameId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get edgeHostnameIdInput() {
    return this._edgeHostnameId;
  }
}

export class PropertyHostnameBucketHostnamesMap extends cdktf.ComplexMap {
  public internalValue? : { [key: string]: PropertyHostnameBucketHostnames } | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string) {
    super(terraformResource, terraformAttribute)
  }

  /**
  * @param key the key of the item to return
  */
  public get(key: string): PropertyHostnameBucketHostnamesOutputReference {
    return new PropertyHostnameBucketHostnamesOutputReference(this.terraformResource, this.terraformAttribute, key);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/property_hostname_bucket akamai_property_hostname_bucket}
*/
export class PropertyHostnameBucket extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "akamai_property_hostname_bucket";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a PropertyHostnameBucket resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the PropertyHostnameBucket to import
  * @param importFromId The id of the existing PropertyHostnameBucket that should be imported. Refer to the {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/property_hostname_bucket#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the PropertyHostnameBucket to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "akamai_property_hostname_bucket", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/property_hostname_bucket akamai_property_hostname_bucket} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options PropertyHostnameBucketConfig
  */
  public constructor(scope: Construct, id: string, config: PropertyHostnameBucketConfig) {
    super(scope, id, {
      terraformResourceType: 'akamai_property_hostname_bucket',
      terraformGeneratorMetadata: {
        providerName: 'akamai',
        providerVersion: '9.1.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._contractId = config.contractId;
    this._groupId = config.groupId;
    this._hostnameCount = config.hostnameCount;
    this._hostnames.internalValue = config.hostnames;
    this._network = config.network;
    this._note = config.note;
    this._notifyEmails = config.notifyEmails;
    this._propertyId = config.propertyId;
    this._timeoutForActivation = config.timeoutForActivation;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // activation_id - computed: true, optional: false, required: false
  public get activationId() {
    return this.getStringAttribute('activation_id');
  }

  // contract_id - computed: true, optional: true, required: false
  private _contractId?: string; 
  public get contractId() {
    return this.getStringAttribute('contract_id');
  }
  public set contractId(value: string) {
    this._contractId = value;
  }
  public resetContractId() {
    this._contractId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contractIdInput() {
    return this._contractId;
  }

  // group_id - computed: true, optional: true, required: false
  private _groupId?: string; 
  public get groupId() {
    return this.getStringAttribute('group_id');
  }
  public set groupId(value: string) {
    this._groupId = value;
  }
  public resetGroupId() {
    this._groupId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupIdInput() {
    return this._groupId;
  }

  // hostname_count - computed: true, optional: true, required: false
  private _hostnameCount?: number; 
  public get hostnameCount() {
    return this.getNumberAttribute('hostname_count');
  }
  public set hostnameCount(value: number) {
    this._hostnameCount = value;
  }
  public resetHostnameCount() {
    this._hostnameCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostnameCountInput() {
    return this._hostnameCount;
  }

  // hostnames - computed: false, optional: false, required: true
  private _hostnames = new PropertyHostnameBucketHostnamesMap(this, "hostnames");
  public get hostnames() {
    return this._hostnames;
  }
  public putHostnames(value: { [key: string]: PropertyHostnameBucketHostnames } | cdktf.IResolvable) {
    this._hostnames.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hostnamesInput() {
    return this._hostnames.internalValue;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // network - computed: false, optional: false, required: true
  private _network?: string; 
  public get network() {
    return this.getStringAttribute('network');
  }
  public set network(value: string) {
    this._network = value;
  }
  // Temporarily expose input value. Use with caution.
  public get networkInput() {
    return this._network;
  }

  // note - computed: true, optional: true, required: false
  private _note?: string; 
  public get note() {
    return this.getStringAttribute('note');
  }
  public set note(value: string) {
    this._note = value;
  }
  public resetNote() {
    this._note = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noteInput() {
    return this._note;
  }

  // notify_emails - computed: true, optional: true, required: false
  private _notifyEmails?: string[]; 
  public get notifyEmails() {
    return this.getListAttribute('notify_emails');
  }
  public set notifyEmails(value: string[]) {
    this._notifyEmails = value;
  }
  public resetNotifyEmails() {
    this._notifyEmails = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notifyEmailsInput() {
    return this._notifyEmails;
  }

  // pending_default_certs - computed: true, optional: false, required: false
  public get pendingDefaultCerts() {
    return this.getNumberAttribute('pending_default_certs');
  }

  // property_id - computed: false, optional: false, required: true
  private _propertyId?: string; 
  public get propertyId() {
    return this.getStringAttribute('property_id');
  }
  public set propertyId(value: string) {
    this._propertyId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get propertyIdInput() {
    return this._propertyId;
  }

  // timeout_for_activation - computed: true, optional: true, required: false
  private _timeoutForActivation?: number; 
  public get timeoutForActivation() {
    return this.getNumberAttribute('timeout_for_activation');
  }
  public set timeoutForActivation(value: number) {
    this._timeoutForActivation = value;
  }
  public resetTimeoutForActivation() {
    this._timeoutForActivation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutForActivationInput() {
    return this._timeoutForActivation;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      contract_id: cdktf.stringToTerraform(this._contractId),
      group_id: cdktf.stringToTerraform(this._groupId),
      hostname_count: cdktf.numberToTerraform(this._hostnameCount),
      hostnames: cdktf.hashMapper(propertyHostnameBucketHostnamesToTerraform)(this._hostnames.internalValue),
      network: cdktf.stringToTerraform(this._network),
      note: cdktf.stringToTerraform(this._note),
      notify_emails: cdktf.listMapper(cdktf.stringToTerraform, false)(this._notifyEmails),
      property_id: cdktf.stringToTerraform(this._propertyId),
      timeout_for_activation: cdktf.numberToTerraform(this._timeoutForActivation),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      contract_id: {
        value: cdktf.stringToHclTerraform(this._contractId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      group_id: {
        value: cdktf.stringToHclTerraform(this._groupId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      hostname_count: {
        value: cdktf.numberToHclTerraform(this._hostnameCount),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      hostnames: {
        value: cdktf.hashMapperHcl(propertyHostnameBucketHostnamesToHclTerraform)(this._hostnames.internalValue),
        isBlock: true,
        type: "map",
        storageClassType: "PropertyHostnameBucketHostnamesMap",
      },
      network: {
        value: cdktf.stringToHclTerraform(this._network),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      note: {
        value: cdktf.stringToHclTerraform(this._note),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      notify_emails: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._notifyEmails),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      property_id: {
        value: cdktf.stringToHclTerraform(this._propertyId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      timeout_for_activation: {
        value: cdktf.numberToHclTerraform(this._timeoutForActivation),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
