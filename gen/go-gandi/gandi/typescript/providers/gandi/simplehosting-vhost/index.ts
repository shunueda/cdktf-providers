// https://registry.terraform.io/providers/go-gandi/gandi/2.3.0/docs/resources/simplehosting_vhost
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SimplehostingVhostConfig extends cdktf.TerraformMetaArguments {
  /**
  * The name of an application to install ('grav', 'matomo', 'nextcloud', 'prestashop', 'wordpress')
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/go-gandi/gandi/2.3.0/docs/resources/simplehosting_vhost#application SimplehostingVhost#application}
  */
  readonly application?: string;
  /**
  * The FQDN of the Vhost
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/go-gandi/gandi/2.3.0/docs/resources/simplehosting_vhost#fqdn SimplehostingVhost#fqdn}
  */
  readonly fqdn: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/go-gandi/gandi/2.3.0/docs/resources/simplehosting_vhost#id SimplehostingVhost#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The ID of the SimpleHosting instance
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/go-gandi/gandi/2.3.0/docs/resources/simplehosting_vhost#instance_id SimplehostingVhost#instance_id}
  */
  readonly instanceId: string;
  /**
  * Whether to alter the linked DNS Zone
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/go-gandi/gandi/2.3.0/docs/resources/simplehosting_vhost#linked_dns_zone_alteration SimplehostingVhost#linked_dns_zone_alteration}
  */
  readonly linkedDnsZoneAlteration?: boolean | cdktf.IResolvable;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/go-gandi/gandi/2.3.0/docs/resources/simplehosting_vhost#timeouts SimplehostingVhost#timeouts}
  */
  readonly timeouts?: SimplehostingVhostTimeouts;
}
export interface SimplehostingVhostTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/go-gandi/gandi/2.3.0/docs/resources/simplehosting_vhost#default SimplehostingVhost#default}
  */
  readonly default?: string;
}

export function simplehostingVhostTimeoutsToTerraform(struct?: SimplehostingVhostTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default: cdktf.stringToTerraform(struct!.default),
  }
}


export function simplehostingVhostTimeoutsToHclTerraform(struct?: SimplehostingVhostTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    default: {
      value: cdktf.stringToHclTerraform(struct!.default),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SimplehostingVhostTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SimplehostingVhostTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._default !== undefined) {
      hasAnyValues = true;
      internalValueResult.default = this._default;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SimplehostingVhostTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._default = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._default = value.default;
    }
  }

  // default - computed: false, optional: true, required: false
  private _default?: string; 
  public get default() {
    return this.getStringAttribute('default');
  }
  public set default(value: string) {
    this._default = value;
  }
  public resetDefault() {
    this._default = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultInput() {
    return this._default;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/go-gandi/gandi/2.3.0/docs/resources/simplehosting_vhost gandi_simplehosting_vhost}
*/
export class SimplehostingVhost extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "gandi_simplehosting_vhost";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SimplehostingVhost resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SimplehostingVhost to import
  * @param importFromId The id of the existing SimplehostingVhost that should be imported. Refer to the {@link https://registry.terraform.io/providers/go-gandi/gandi/2.3.0/docs/resources/simplehosting_vhost#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SimplehostingVhost to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "gandi_simplehosting_vhost", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/go-gandi/gandi/2.3.0/docs/resources/simplehosting_vhost gandi_simplehosting_vhost} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SimplehostingVhostConfig
  */
  public constructor(scope: Construct, id: string, config: SimplehostingVhostConfig) {
    super(scope, id, {
      terraformResourceType: 'gandi_simplehosting_vhost',
      terraformGeneratorMetadata: {
        providerName: 'gandi',
        providerVersion: '2.3.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._application = config.application;
    this._fqdn = config.fqdn;
    this._id = config.id;
    this._instanceId = config.instanceId;
    this._linkedDnsZoneAlteration = config.linkedDnsZoneAlteration;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // application - computed: false, optional: true, required: false
  private _application?: string; 
  public get application() {
    return this.getStringAttribute('application');
  }
  public set application(value: string) {
    this._application = value;
  }
  public resetApplication() {
    this._application = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get applicationInput() {
    return this._application;
  }

  // certificate_id - computed: true, optional: false, required: false
  public get certificateId() {
    return this.getStringAttribute('certificate_id');
  }

  // fqdn - computed: false, optional: false, required: true
  private _fqdn?: string; 
  public get fqdn() {
    return this.getStringAttribute('fqdn');
  }
  public set fqdn(value: string) {
    this._fqdn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fqdnInput() {
    return this._fqdn;
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

  // instance_id - computed: false, optional: false, required: true
  private _instanceId?: string; 
  public get instanceId() {
    return this.getStringAttribute('instance_id');
  }
  public set instanceId(value: string) {
    this._instanceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceIdInput() {
    return this._instanceId;
  }

  // linked_dns_zone_alteration - computed: false, optional: true, required: false
  private _linkedDnsZoneAlteration?: boolean | cdktf.IResolvable; 
  public get linkedDnsZoneAlteration() {
    return this.getBooleanAttribute('linked_dns_zone_alteration');
  }
  public set linkedDnsZoneAlteration(value: boolean | cdktf.IResolvable) {
    this._linkedDnsZoneAlteration = value;
  }
  public resetLinkedDnsZoneAlteration() {
    this._linkedDnsZoneAlteration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get linkedDnsZoneAlterationInput() {
    return this._linkedDnsZoneAlteration;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new SimplehostingVhostTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: SimplehostingVhostTimeouts) {
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
      application: cdktf.stringToTerraform(this._application),
      fqdn: cdktf.stringToTerraform(this._fqdn),
      id: cdktf.stringToTerraform(this._id),
      instance_id: cdktf.stringToTerraform(this._instanceId),
      linked_dns_zone_alteration: cdktf.booleanToTerraform(this._linkedDnsZoneAlteration),
      timeouts: simplehostingVhostTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      application: {
        value: cdktf.stringToHclTerraform(this._application),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      fqdn: {
        value: cdktf.stringToHclTerraform(this._fqdn),
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
      instance_id: {
        value: cdktf.stringToHclTerraform(this._instanceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      linked_dns_zone_alteration: {
        value: cdktf.booleanToHclTerraform(this._linkedDnsZoneAlteration),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      timeouts: {
        value: simplehostingVhostTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "SimplehostingVhostTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
