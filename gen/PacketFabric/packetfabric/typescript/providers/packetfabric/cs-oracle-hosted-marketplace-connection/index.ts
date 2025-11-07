// https://registry.terraform.io/providers/packetfabric/packetfabric/1.9.3/docs/resources/cs_oracle_hosted_marketplace_connection
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CsOracleHostedMarketplaceConnectionConfig extends cdktf.TerraformMetaArguments {
  /**
  * The UUID for the billing account that should be billed. Can also be set with the PF_ACCOUNT_ID environment variable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/packetfabric/packetfabric/1.9.3/docs/resources/cs_oracle_hosted_marketplace_connection#account_uuid CsOracleHostedMarketplaceConnection#account_uuid}
  */
  readonly accountUuid: string;
  /**
  * A brief description of this connection.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/packetfabric/packetfabric/1.9.3/docs/resources/cs_oracle_hosted_marketplace_connection#description CsOracleHostedMarketplaceConnection#description}
  */
  readonly description: string;
  /**
  * The market code (e.g. "ATL" or "DAL") in which you would like the marketplace provider to provision their side of the connection.
  * 
  * 	If the marketplace provider has services published in the marketplace, you can use the PacketFabric portal to see which POPs they are in. Simply remove the number from the POP to get the market code (e.g. if they offer services in "DAL5", enter "DAL" for the market).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/packetfabric/packetfabric/1.9.3/docs/resources/cs_oracle_hosted_marketplace_connection#market CsOracleHostedMarketplaceConnection#market}
  */
  readonly market: string;
  /**
  * The POP in which the connection should be provisioned (the cloud on-ramp).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/packetfabric/packetfabric/1.9.3/docs/resources/cs_oracle_hosted_marketplace_connection#pop CsOracleHostedMarketplaceConnection#pop}
  */
  readonly pop: string;
  /**
  * The region in which you created the FastConnect virtual circuit.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/packetfabric/packetfabric/1.9.3/docs/resources/cs_oracle_hosted_marketplace_connection#region CsOracleHostedMarketplaceConnection#region}
  */
  readonly region: string;
  /**
  * The routing ID of the marketplace provider that will be receiving this request.
  * 
  * 	Example: TR-1RI-OQ85
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/packetfabric/packetfabric/1.9.3/docs/resources/cs_oracle_hosted_marketplace_connection#routing_id CsOracleHostedMarketplaceConnection#routing_id}
  */
  readonly routingId: string;
  /**
  * UUID of the marketplace service being requested.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/packetfabric/packetfabric/1.9.3/docs/resources/cs_oracle_hosted_marketplace_connection#service_uuid CsOracleHostedMarketplaceConnection#service_uuid}
  */
  readonly serviceUuid?: string;
  /**
  * OCID of the FastConnect virtual circuit that you created from the Oracle side.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/packetfabric/packetfabric/1.9.3/docs/resources/cs_oracle_hosted_marketplace_connection#vc_ocid CsOracleHostedMarketplaceConnection#vc_ocid}
  */
  readonly vcOcid: string;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/packetfabric/packetfabric/1.9.3/docs/resources/cs_oracle_hosted_marketplace_connection#timeouts CsOracleHostedMarketplaceConnection#timeouts}
  */
  readonly timeouts?: CsOracleHostedMarketplaceConnectionTimeouts;
}
export interface CsOracleHostedMarketplaceConnectionTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/packetfabric/packetfabric/1.9.3/docs/resources/cs_oracle_hosted_marketplace_connection#create CsOracleHostedMarketplaceConnection#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/packetfabric/packetfabric/1.9.3/docs/resources/cs_oracle_hosted_marketplace_connection#delete CsOracleHostedMarketplaceConnection#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/packetfabric/packetfabric/1.9.3/docs/resources/cs_oracle_hosted_marketplace_connection#read CsOracleHostedMarketplaceConnection#read}
  */
  readonly read?: string;
}

export function csOracleHostedMarketplaceConnectionTimeoutsToTerraform(struct?: CsOracleHostedMarketplaceConnectionTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    read: cdktf.stringToTerraform(struct!.read),
  }
}


export function csOracleHostedMarketplaceConnectionTimeoutsToHclTerraform(struct?: CsOracleHostedMarketplaceConnectionTimeouts | cdktf.IResolvable): any {
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
    read: {
      value: cdktf.stringToHclTerraform(struct!.read),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CsOracleHostedMarketplaceConnectionTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CsOracleHostedMarketplaceConnectionTimeouts | cdktf.IResolvable | undefined {
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
    if (this._read !== undefined) {
      hasAnyValues = true;
      internalValueResult.read = this._read;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CsOracleHostedMarketplaceConnectionTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
      this._read = undefined;
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
      this._read = value.read;
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

  // read - computed: false, optional: true, required: false
  private _read?: string; 
  public get read() {
    return this.getStringAttribute('read');
  }
  public set read(value: string) {
    this._read = value;
  }
  public resetRead() {
    this._read = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readInput() {
    return this._read;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/packetfabric/packetfabric/1.9.3/docs/resources/cs_oracle_hosted_marketplace_connection packetfabric_cs_oracle_hosted_marketplace_connection}
*/
export class CsOracleHostedMarketplaceConnection extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "packetfabric_cs_oracle_hosted_marketplace_connection";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CsOracleHostedMarketplaceConnection resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CsOracleHostedMarketplaceConnection to import
  * @param importFromId The id of the existing CsOracleHostedMarketplaceConnection that should be imported. Refer to the {@link https://registry.terraform.io/providers/packetfabric/packetfabric/1.9.3/docs/resources/cs_oracle_hosted_marketplace_connection#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CsOracleHostedMarketplaceConnection to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "packetfabric_cs_oracle_hosted_marketplace_connection", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/packetfabric/packetfabric/1.9.3/docs/resources/cs_oracle_hosted_marketplace_connection packetfabric_cs_oracle_hosted_marketplace_connection} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CsOracleHostedMarketplaceConnectionConfig
  */
  public constructor(scope: Construct, id: string, config: CsOracleHostedMarketplaceConnectionConfig) {
    super(scope, id, {
      terraformResourceType: 'packetfabric_cs_oracle_hosted_marketplace_connection',
      terraformGeneratorMetadata: {
        providerName: 'packetfabric',
        providerVersion: '1.9.3'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._accountUuid = config.accountUuid;
    this._description = config.description;
    this._market = config.market;
    this._pop = config.pop;
    this._region = config.region;
    this._routingId = config.routingId;
    this._serviceUuid = config.serviceUuid;
    this._vcOcid = config.vcOcid;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // account_uuid - computed: false, optional: false, required: true
  private _accountUuid?: string; 
  public get accountUuid() {
    return this.getStringAttribute('account_uuid');
  }
  public set accountUuid(value: string) {
    this._accountUuid = value;
  }
  // Temporarily expose input value. Use with caution.
  public get accountUuidInput() {
    return this._accountUuid;
  }

  // description - computed: false, optional: false, required: true
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // market - computed: false, optional: false, required: true
  private _market?: string; 
  public get market() {
    return this.getStringAttribute('market');
  }
  public set market(value: string) {
    this._market = value;
  }
  // Temporarily expose input value. Use with caution.
  public get marketInput() {
    return this._market;
  }

  // pop - computed: false, optional: false, required: true
  private _pop?: string; 
  public get pop() {
    return this.getStringAttribute('pop');
  }
  public set pop(value: string) {
    this._pop = value;
  }
  // Temporarily expose input value. Use with caution.
  public get popInput() {
    return this._pop;
  }

  // region - computed: false, optional: false, required: true
  private _region?: string; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
  }

  // routing_id - computed: false, optional: false, required: true
  private _routingId?: string; 
  public get routingId() {
    return this.getStringAttribute('routing_id');
  }
  public set routingId(value: string) {
    this._routingId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get routingIdInput() {
    return this._routingId;
  }

  // service_uuid - computed: false, optional: true, required: false
  private _serviceUuid?: string; 
  public get serviceUuid() {
    return this.getStringAttribute('service_uuid');
  }
  public set serviceUuid(value: string) {
    this._serviceUuid = value;
  }
  public resetServiceUuid() {
    this._serviceUuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceUuidInput() {
    return this._serviceUuid;
  }

  // vc_ocid - computed: false, optional: false, required: true
  private _vcOcid?: string; 
  public get vcOcid() {
    return this.getStringAttribute('vc_ocid');
  }
  public set vcOcid(value: string) {
    this._vcOcid = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vcOcidInput() {
    return this._vcOcid;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new CsOracleHostedMarketplaceConnectionTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: CsOracleHostedMarketplaceConnectionTimeouts) {
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
      account_uuid: cdktf.stringToTerraform(this._accountUuid),
      description: cdktf.stringToTerraform(this._description),
      market: cdktf.stringToTerraform(this._market),
      pop: cdktf.stringToTerraform(this._pop),
      region: cdktf.stringToTerraform(this._region),
      routing_id: cdktf.stringToTerraform(this._routingId),
      service_uuid: cdktf.stringToTerraform(this._serviceUuid),
      vc_ocid: cdktf.stringToTerraform(this._vcOcid),
      timeouts: csOracleHostedMarketplaceConnectionTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      account_uuid: {
        value: cdktf.stringToHclTerraform(this._accountUuid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      market: {
        value: cdktf.stringToHclTerraform(this._market),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      pop: {
        value: cdktf.stringToHclTerraform(this._pop),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      region: {
        value: cdktf.stringToHclTerraform(this._region),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      routing_id: {
        value: cdktf.stringToHclTerraform(this._routingId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      service_uuid: {
        value: cdktf.stringToHclTerraform(this._serviceUuid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vc_ocid: {
        value: cdktf.stringToHclTerraform(this._vcOcid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      timeouts: {
        value: csOracleHostedMarketplaceConnectionTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "CsOracleHostedMarketplaceConnectionTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
