// https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/integration_oracle_managed_custom_endpoint
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface IntegrationOracleManagedCustomEndpointConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/integration_oracle_managed_custom_endpoint#dns_type IntegrationOracleManagedCustomEndpoint#dns_type}
  */
  readonly dnsType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/integration_oracle_managed_custom_endpoint#dns_zone_name IntegrationOracleManagedCustomEndpoint#dns_zone_name}
  */
  readonly dnsZoneName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/integration_oracle_managed_custom_endpoint#hostname IntegrationOracleManagedCustomEndpoint#hostname}
  */
  readonly hostname: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/integration_oracle_managed_custom_endpoint#id IntegrationOracleManagedCustomEndpoint#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/integration_oracle_managed_custom_endpoint#integration_instance_id IntegrationOracleManagedCustomEndpoint#integration_instance_id}
  */
  readonly integrationInstanceId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/integration_oracle_managed_custom_endpoint#managed_type IntegrationOracleManagedCustomEndpoint#managed_type}
  */
  readonly managedType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/integration_oracle_managed_custom_endpoint#state IntegrationOracleManagedCustomEndpoint#state}
  */
  readonly state?: string;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/integration_oracle_managed_custom_endpoint#timeouts IntegrationOracleManagedCustomEndpoint#timeouts}
  */
  readonly timeouts?: IntegrationOracleManagedCustomEndpointTimeouts;
}
export interface IntegrationOracleManagedCustomEndpointTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/integration_oracle_managed_custom_endpoint#create IntegrationOracleManagedCustomEndpoint#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/integration_oracle_managed_custom_endpoint#delete IntegrationOracleManagedCustomEndpoint#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/integration_oracle_managed_custom_endpoint#update IntegrationOracleManagedCustomEndpoint#update}
  */
  readonly update?: string;
}

export function integrationOracleManagedCustomEndpointTimeoutsToTerraform(struct?: IntegrationOracleManagedCustomEndpointTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


export function integrationOracleManagedCustomEndpointTimeoutsToHclTerraform(struct?: IntegrationOracleManagedCustomEndpointTimeouts | cdktf.IResolvable): any {
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
    delete: {
      value: cdktf.stringToHclTerraform(struct!.delete),
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

export class IntegrationOracleManagedCustomEndpointTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IntegrationOracleManagedCustomEndpointTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._delete !== undefined) {
      hasAnyValues = true;
      internalValueResult.delete = this._delete;
    }
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IntegrationOracleManagedCustomEndpointTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
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
      this._delete = value.delete;
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

  // delete - computed: false, optional: true, required: false
  private _delete?: string; 
  public get delete() {
    return this.getStringAttribute('delete');
  }
  public set delete(value: string) {
    this._delete = value;
  }
  public resetDelete() {
    this._delete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete;
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
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/integration_oracle_managed_custom_endpoint oci_integration_oracle_managed_custom_endpoint}
*/
export class IntegrationOracleManagedCustomEndpoint extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_integration_oracle_managed_custom_endpoint";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a IntegrationOracleManagedCustomEndpoint resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the IntegrationOracleManagedCustomEndpoint to import
  * @param importFromId The id of the existing IntegrationOracleManagedCustomEndpoint that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/integration_oracle_managed_custom_endpoint#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the IntegrationOracleManagedCustomEndpoint to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_integration_oracle_managed_custom_endpoint", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/integration_oracle_managed_custom_endpoint oci_integration_oracle_managed_custom_endpoint} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options IntegrationOracleManagedCustomEndpointConfig
  */
  public constructor(scope: Construct, id: string, config: IntegrationOracleManagedCustomEndpointConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_integration_oracle_managed_custom_endpoint',
      terraformGeneratorMetadata: {
        providerName: 'oci',
        providerVersion: '7.28.0',
        providerVersionConstraint: '7.28.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._dnsType = config.dnsType;
    this._dnsZoneName = config.dnsZoneName;
    this._hostname = config.hostname;
    this._id = config.id;
    this._integrationInstanceId = config.integrationInstanceId;
    this._managedType = config.managedType;
    this._state = config.state;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // dns_type - computed: true, optional: true, required: false
  private _dnsType?: string; 
  public get dnsType() {
    return this.getStringAttribute('dns_type');
  }
  public set dnsType(value: string) {
    this._dnsType = value;
  }
  public resetDnsType() {
    this._dnsType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsTypeInput() {
    return this._dnsType;
  }

  // dns_zone_name - computed: false, optional: true, required: false
  private _dnsZoneName?: string; 
  public get dnsZoneName() {
    return this.getStringAttribute('dns_zone_name');
  }
  public set dnsZoneName(value: string) {
    this._dnsZoneName = value;
  }
  public resetDnsZoneName() {
    this._dnsZoneName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsZoneNameInput() {
    return this._dnsZoneName;
  }

  // hostname - computed: false, optional: false, required: true
  private _hostname?: string; 
  public get hostname() {
    return this.getStringAttribute('hostname');
  }
  public set hostname(value: string) {
    this._hostname = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hostnameInput() {
    return this._hostname;
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

  // integration_instance_id - computed: false, optional: false, required: true
  private _integrationInstanceId?: string; 
  public get integrationInstanceId() {
    return this.getStringAttribute('integration_instance_id');
  }
  public set integrationInstanceId(value: string) {
    this._integrationInstanceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get integrationInstanceIdInput() {
    return this._integrationInstanceId;
  }

  // managed_type - computed: true, optional: true, required: false
  private _managedType?: string; 
  public get managedType() {
    return this.getStringAttribute('managed_type');
  }
  public set managedType(value: string) {
    this._managedType = value;
  }
  public resetManagedType() {
    this._managedType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get managedTypeInput() {
    return this._managedType;
  }

  // state - computed: true, optional: true, required: false
  private _state?: string; 
  public get state() {
    return this.getStringAttribute('state');
  }
  public set state(value: string) {
    this._state = value;
  }
  public resetState() {
    this._state = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stateInput() {
    return this._state;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new IntegrationOracleManagedCustomEndpointTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: IntegrationOracleManagedCustomEndpointTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      dns_type: cdktf.stringToTerraform(this._dnsType),
      dns_zone_name: cdktf.stringToTerraform(this._dnsZoneName),
      hostname: cdktf.stringToTerraform(this._hostname),
      id: cdktf.stringToTerraform(this._id),
      integration_instance_id: cdktf.stringToTerraform(this._integrationInstanceId),
      managed_type: cdktf.stringToTerraform(this._managedType),
      state: cdktf.stringToTerraform(this._state),
      timeouts: integrationOracleManagedCustomEndpointTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      dns_type: {
        value: cdktf.stringToHclTerraform(this._dnsType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dns_zone_name: {
        value: cdktf.stringToHclTerraform(this._dnsZoneName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      hostname: {
        value: cdktf.stringToHclTerraform(this._hostname),
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
      integration_instance_id: {
        value: cdktf.stringToHclTerraform(this._integrationInstanceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      managed_type: {
        value: cdktf.stringToHclTerraform(this._managedType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      state: {
        value: cdktf.stringToHclTerraform(this._state),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      timeouts: {
        value: integrationOracleManagedCustomEndpointTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "IntegrationOracleManagedCustomEndpointTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
