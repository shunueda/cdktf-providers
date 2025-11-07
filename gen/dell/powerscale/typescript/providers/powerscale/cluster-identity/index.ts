// https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/cluster_identity
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ClusterIdentityConfig extends cdktf.TerraformMetaArguments {
  /**
  * A description of the cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/cluster_identity#description ClusterIdentity#description}
  */
  readonly description?: string;
  /**
  * The information displayed when a user logs in to the cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/cluster_identity#logon ClusterIdentity#logon}
  */
  readonly logon?: ClusterIdentityLogon;
  /**
  * A unique name for this cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/cluster_identity#name ClusterIdentity#name}
  */
  readonly name?: string;
}
export interface ClusterIdentityLogon {
  /**
  * The message of the day.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/cluster_identity#motd ClusterIdentity#motd}
  */
  readonly motd?: string;
  /**
  * The header to the message of the day.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/cluster_identity#motd_header ClusterIdentity#motd_header}
  */
  readonly motdHeader?: string;
}

export function clusterIdentityLogonToTerraform(struct?: ClusterIdentityLogon | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    motd: cdktf.stringToTerraform(struct!.motd),
    motd_header: cdktf.stringToTerraform(struct!.motdHeader),
  }
}


export function clusterIdentityLogonToHclTerraform(struct?: ClusterIdentityLogon | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    motd: {
      value: cdktf.stringToHclTerraform(struct!.motd),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    motd_header: {
      value: cdktf.stringToHclTerraform(struct!.motdHeader),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ClusterIdentityLogonOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ClusterIdentityLogon | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._motd !== undefined) {
      hasAnyValues = true;
      internalValueResult.motd = this._motd;
    }
    if (this._motdHeader !== undefined) {
      hasAnyValues = true;
      internalValueResult.motdHeader = this._motdHeader;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClusterIdentityLogon | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._motd = undefined;
      this._motdHeader = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._motd = value.motd;
      this._motdHeader = value.motdHeader;
    }
  }

  // motd - computed: true, optional: true, required: false
  private _motd?: string; 
  public get motd() {
    return this.getStringAttribute('motd');
  }
  public set motd(value: string) {
    this._motd = value;
  }
  public resetMotd() {
    this._motd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get motdInput() {
    return this._motd;
  }

  // motd_header - computed: true, optional: true, required: false
  private _motdHeader?: string; 
  public get motdHeader() {
    return this.getStringAttribute('motd_header');
  }
  public set motdHeader(value: string) {
    this._motdHeader = value;
  }
  public resetMotdHeader() {
    this._motdHeader = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get motdHeaderInput() {
    return this._motdHeader;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/cluster_identity powerscale_cluster_identity}
*/
export class ClusterIdentity extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "powerscale_cluster_identity";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ClusterIdentity resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ClusterIdentity to import
  * @param importFromId The id of the existing ClusterIdentity that should be imported. Refer to the {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/cluster_identity#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ClusterIdentity to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "powerscale_cluster_identity", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/cluster_identity powerscale_cluster_identity} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ClusterIdentityConfig = {}
  */
  public constructor(scope: Construct, id: string, config: ClusterIdentityConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'powerscale_cluster_identity',
      terraformGeneratorMetadata: {
        providerName: 'powerscale',
        providerVersion: '1.8.0'
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
    this._logon.internalValue = config.logon;
    this._name = config.name;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // description - computed: true, optional: true, required: false
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

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // logon - computed: true, optional: true, required: false
  private _logon = new ClusterIdentityLogonOutputReference(this, "logon");
  public get logon() {
    return this._logon;
  }
  public putLogon(value: ClusterIdentityLogon) {
    this._logon.internalValue = value;
  }
  public resetLogon() {
    this._logon.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logonInput() {
    return this._logon.internalValue;
  }

  // name - computed: true, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      logon: clusterIdentityLogonToTerraform(this._logon.internalValue),
      name: cdktf.stringToTerraform(this._name),
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
      logon: {
        value: clusterIdentityLogonToHclTerraform(this._logon.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ClusterIdentityLogon",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
