// https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/infra_service
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface InfraServiceConfig extends cdktf.TerraformMetaArguments {
  /**
  * The description of the Service (optional).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/infra_service#description InfraService#description}
  */
  readonly description?: string;
  /**
  * The desired state of the Service. Should either be `"start"` or `"stop"`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/infra_service#desired_state InfraService#desired_state}
  */
  readonly desiredState?: string;
  /**
  * The desired version of the Service.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/infra_service#desired_version InfraService#desired_version}
  */
  readonly desiredVersion?: string;
  /**
  * List of interfaces on which this Service can operate. Note: The list can contain custom interface labels (Example: `["WAN","LAN","label1","label2"]`)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/infra_service#interface_labels InfraService#interface_labels}
  */
  readonly interfaceLabels?: string[];
  /**
  * The name of the Service (unique).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/infra_service#name InfraService#name}
  */
  readonly name: string;
  /**
  * The resource identifier.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/infra_service#pool_id InfraService#pool_id}
  */
  readonly poolId: string;
  /**
  * The type of the Service deployed on the Host (`dns`, `cdc`, etc.). The following is a list of the different Services and their string types (the string types are to be used with the APIs for the `service_type` field):
  * 
  *   | Service name          | Service type | 
  *   | --------------------- | ------------ | 
  *   | Access Authentication | authn        | 
  *   | Anycast               | anycast      | 
  *   | Data Connector        | cdc          | 
  *   | DHCP                  | dhcp         | 
  *   | DNS                   | dns          | 
  *   | DNS Forwarding Proxy  | dfp          | 
  *   | NIOS Grid Connector   | orpheus      | 
  *   | MS AD Sync            | msad         | 
  *   | NTP                   | ntp          | 
  *   | BGP                   | bgp          | 
  *   | RIP                   | rip          | 
  *   | OSPF                  | ospf         | 
  *   <br>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/infra_service#service_type InfraService#service_type}
  */
  readonly serviceType: string;
  /**
  * Tags associated with this Service.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/infra_service#tags InfraService#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/infra_service#timeouts InfraService#timeouts}
  */
  readonly timeouts?: InfraServiceTimeouts;
  /**
  * If set to `true`, the resource will wait for the desired state to be reached before returning. If set to `false`, the resource will return immediately after the request is sent to the API.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/infra_service#wait_for_state InfraService#wait_for_state}
  */
  readonly waitForState?: boolean | cdktf.IResolvable;
}
export interface InfraServiceConfigs {
  /**
  * The current version of the Service deployed on the Host.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/infra_service#current_version InfraService#current_version}
  */
  readonly currentVersion?: string;
  /**
  * The field to carry any extra data specific to this configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/infra_service#extra_data InfraService#extra_data}
  */
  readonly extraData?: string;
  /**
  * The resource identifier.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/infra_service#host_id InfraService#host_id}
  */
  readonly hostId?: string;
  /**
  * The resource identifier.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/infra_service#service_id InfraService#service_id}
  */
  readonly serviceId?: string;
  /**
  * The type of the Service deployed on the Host (`dns`, `cdc`, etc.). The following is a list of the different Services and their string types (the string types are to be used with the APIs for the `service_type` field):
  * 
  *   | Service name | Service type | 
  *   | ------ | ------ | 
  *   | Access Authentication | authn | 
  *   | Anycast | anycast | 
  *   | Data Connector | cdc | 
  *   | DHCP | dhcp | 
  *   | DNS | dns | 
  *   | DNS Forwarding Proxy | dfp | 
  *   | NIOS Grid Connector | orpheus | 
  *   | MS AD Sync | msad | 
  *   | NTP | ntp | 
  *   | BGP | bgp | 
  *   | RIP | rip | 
  *   | OSPF | ospf | 
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/infra_service#service_type InfraService#service_type}
  */
  readonly serviceType?: string;
  /**
  * The timestamp of the latest upgrade of the Host-specific Service configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/infra_service#upgraded_at InfraService#upgraded_at}
  */
  readonly upgradedAt?: string;
}

export function infraServiceConfigsToTerraform(struct?: InfraServiceConfigs): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    current_version: cdktf.stringToTerraform(struct!.currentVersion),
    extra_data: cdktf.stringToTerraform(struct!.extraData),
    host_id: cdktf.stringToTerraform(struct!.hostId),
    service_id: cdktf.stringToTerraform(struct!.serviceId),
    service_type: cdktf.stringToTerraform(struct!.serviceType),
    upgraded_at: cdktf.stringToTerraform(struct!.upgradedAt),
  }
}


export function infraServiceConfigsToHclTerraform(struct?: InfraServiceConfigs): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    current_version: {
      value: cdktf.stringToHclTerraform(struct!.currentVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    extra_data: {
      value: cdktf.stringToHclTerraform(struct!.extraData),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    host_id: {
      value: cdktf.stringToHclTerraform(struct!.hostId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    service_id: {
      value: cdktf.stringToHclTerraform(struct!.serviceId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    service_type: {
      value: cdktf.stringToHclTerraform(struct!.serviceType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    upgraded_at: {
      value: cdktf.stringToHclTerraform(struct!.upgradedAt),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class InfraServiceConfigsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): InfraServiceConfigs | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._currentVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.currentVersion = this._currentVersion;
    }
    if (this._extraData !== undefined) {
      hasAnyValues = true;
      internalValueResult.extraData = this._extraData;
    }
    if (this._hostId !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostId = this._hostId;
    }
    if (this._serviceId !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceId = this._serviceId;
    }
    if (this._serviceType !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceType = this._serviceType;
    }
    if (this._upgradedAt !== undefined) {
      hasAnyValues = true;
      internalValueResult.upgradedAt = this._upgradedAt;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: InfraServiceConfigs | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._currentVersion = undefined;
      this._extraData = undefined;
      this._hostId = undefined;
      this._serviceId = undefined;
      this._serviceType = undefined;
      this._upgradedAt = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._currentVersion = value.currentVersion;
      this._extraData = value.extraData;
      this._hostId = value.hostId;
      this._serviceId = value.serviceId;
      this._serviceType = value.serviceType;
      this._upgradedAt = value.upgradedAt;
    }
  }

  // current_version - computed: true, optional: true, required: false
  private _currentVersion?: string; 
  public get currentVersion() {
    return this.getStringAttribute('current_version');
  }
  public set currentVersion(value: string) {
    this._currentVersion = value;
  }
  public resetCurrentVersion() {
    this._currentVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get currentVersionInput() {
    return this._currentVersion;
  }

  // extra_data - computed: true, optional: true, required: false
  private _extraData?: string; 
  public get extraData() {
    return this.getStringAttribute('extra_data');
  }
  public set extraData(value: string) {
    this._extraData = value;
  }
  public resetExtraData() {
    this._extraData = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extraDataInput() {
    return this._extraData;
  }

  // host_id - computed: true, optional: true, required: false
  private _hostId?: string; 
  public get hostId() {
    return this.getStringAttribute('host_id');
  }
  public set hostId(value: string) {
    this._hostId = value;
  }
  public resetHostId() {
    this._hostId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostIdInput() {
    return this._hostId;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // service_id - computed: true, optional: true, required: false
  private _serviceId?: string; 
  public get serviceId() {
    return this.getStringAttribute('service_id');
  }
  public set serviceId(value: string) {
    this._serviceId = value;
  }
  public resetServiceId() {
    this._serviceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceIdInput() {
    return this._serviceId;
  }

  // service_type - computed: true, optional: true, required: false
  private _serviceType?: string; 
  public get serviceType() {
    return this.getStringAttribute('service_type');
  }
  public set serviceType(value: string) {
    this._serviceType = value;
  }
  public resetServiceType() {
    this._serviceType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceTypeInput() {
    return this._serviceType;
  }

  // upgraded_at - computed: true, optional: true, required: false
  private _upgradedAt?: string; 
  public get upgradedAt() {
    return this.getStringAttribute('upgraded_at');
  }
  public set upgradedAt(value: string) {
    this._upgradedAt = value;
  }
  public resetUpgradedAt() {
    this._upgradedAt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get upgradedAtInput() {
    return this._upgradedAt;
  }
}

export class InfraServiceConfigsList extends cdktf.ComplexList {
  public internalValue? : InfraServiceConfigs[] | cdktf.IResolvable

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
  public get(index: number): InfraServiceConfigsOutputReference {
    return new InfraServiceConfigsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface InfraServiceTimeouts {
  /**
  * [Duration](https://pkg.go.dev/time#ParseDuration) to wait before being considered a timeout during create operations. Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Default is 20m.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/infra_service#create InfraService#create}
  */
  readonly create?: string;
  /**
  * [Duration](https://pkg.go.dev/time#ParseDuration) to wait before being considered a timeout during update operations. Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Default is 20m.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/infra_service#update InfraService#update}
  */
  readonly update?: string;
}

export function infraServiceTimeoutsToTerraform(struct?: InfraServiceTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


export function infraServiceTimeoutsToHclTerraform(struct?: InfraServiceTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    create: {
      value: cdktf.stringToHclTerraform(struct!.create),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    update: {
      value: cdktf.stringToHclTerraform(struct!.update),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class InfraServiceTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): InfraServiceTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: InfraServiceTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._update = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._create = value.create;
      this._update = value.update;
    }
  }

  // create - computed: false, optional: true, required: false
  private _create?: string; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create;
  }

  // update - computed: false, optional: true, required: false
  private _update?: string; 
  public get update() {
    return this.getStringAttribute('update');
  }
  public set update(value: string) {
    this._update = value;
  }
  public resetUpdate() {
    this._update = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateInput() {
    return this._update;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/infra_service bloxone_infra_service}
*/
export class InfraService extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "bloxone_infra_service";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a InfraService resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the InfraService to import
  * @param importFromId The id of the existing InfraService that should be imported. Refer to the {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/infra_service#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the InfraService to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "bloxone_infra_service", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/infra_service bloxone_infra_service} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options InfraServiceConfig
  */
  public constructor(scope: Construct, id: string, config: InfraServiceConfig) {
    super(scope, id, {
      terraformResourceType: 'bloxone_infra_service',
      terraformGeneratorMetadata: {
        providerName: 'bloxone',
        providerVersion: '1.5.3',
        providerVersionConstraint: '1.5.3'
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
    this._desiredState = config.desiredState;
    this._desiredVersion = config.desiredVersion;
    this._interfaceLabels = config.interfaceLabels;
    this._name = config.name;
    this._poolId = config.poolId;
    this._serviceType = config.serviceType;
    this._tags = config.tags;
    this._timeouts.internalValue = config.timeouts;
    this._waitForState = config.waitForState;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // configs - computed: true, optional: false, required: false
  private _configs = new InfraServiceConfigsList(this, "configs", false);
  public get configs() {
    return this._configs;
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
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

  // desired_state - computed: true, optional: true, required: false
  private _desiredState?: string; 
  public get desiredState() {
    return this.getStringAttribute('desired_state');
  }
  public set desiredState(value: string) {
    this._desiredState = value;
  }
  public resetDesiredState() {
    this._desiredState = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get desiredStateInput() {
    return this._desiredState;
  }

  // desired_version - computed: false, optional: true, required: false
  private _desiredVersion?: string; 
  public get desiredVersion() {
    return this.getStringAttribute('desired_version');
  }
  public set desiredVersion(value: string) {
    this._desiredVersion = value;
  }
  public resetDesiredVersion() {
    this._desiredVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get desiredVersionInput() {
    return this._desiredVersion;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // interface_labels - computed: false, optional: true, required: false
  private _interfaceLabels?: string[]; 
  public get interfaceLabels() {
    return this.getListAttribute('interface_labels');
  }
  public set interfaceLabels(value: string[]) {
    this._interfaceLabels = value;
  }
  public resetInterfaceLabels() {
    this._interfaceLabels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interfaceLabelsInput() {
    return this._interfaceLabels;
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

  // pool_id - computed: false, optional: false, required: true
  private _poolId?: string; 
  public get poolId() {
    return this.getStringAttribute('pool_id');
  }
  public set poolId(value: string) {
    this._poolId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get poolIdInput() {
    return this._poolId;
  }

  // service_type - computed: false, optional: false, required: true
  private _serviceType?: string; 
  public get serviceType() {
    return this.getStringAttribute('service_type');
  }
  public set serviceType(value: string) {
    this._serviceType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceTypeInput() {
    return this._serviceType;
  }

  // tags - computed: true, optional: true, required: false
  private _tags?: { [key: string]: string }; 
  public get tags() {
    return this.getStringMapAttribute('tags');
  }
  public set tags(value: { [key: string]: string }) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // tags_all - computed: true, optional: false, required: false
  private _tagsAll = new cdktf.StringMap(this, "tags_all");
  public get tagsAll() {
    return this._tagsAll;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new InfraServiceTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: InfraServiceTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // updated_at - computed: true, optional: false, required: false
  public get updatedAt() {
    return this.getStringAttribute('updated_at');
  }

  // wait_for_state - computed: true, optional: true, required: false
  private _waitForState?: boolean | cdktf.IResolvable; 
  public get waitForState() {
    return this.getBooleanAttribute('wait_for_state');
  }
  public set waitForState(value: boolean | cdktf.IResolvable) {
    this._waitForState = value;
  }
  public resetWaitForState() {
    this._waitForState = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get waitForStateInput() {
    return this._waitForState;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      desired_state: cdktf.stringToTerraform(this._desiredState),
      desired_version: cdktf.stringToTerraform(this._desiredVersion),
      interface_labels: cdktf.listMapper(cdktf.stringToTerraform, false)(this._interfaceLabels),
      name: cdktf.stringToTerraform(this._name),
      pool_id: cdktf.stringToTerraform(this._poolId),
      service_type: cdktf.stringToTerraform(this._serviceType),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      timeouts: infraServiceTimeoutsToTerraform(this._timeouts.internalValue),
      wait_for_state: cdktf.booleanToTerraform(this._waitForState),
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
      desired_state: {
        value: cdktf.stringToHclTerraform(this._desiredState),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      desired_version: {
        value: cdktf.stringToHclTerraform(this._desiredVersion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      interface_labels: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._interfaceLabels),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      pool_id: {
        value: cdktf.stringToHclTerraform(this._poolId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      service_type: {
        value: cdktf.stringToHclTerraform(this._serviceType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tags: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._tags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      timeouts: {
        value: infraServiceTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "InfraServiceTimeouts",
      },
      wait_for_state: {
        value: cdktf.booleanToHclTerraform(this._waitForState),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
